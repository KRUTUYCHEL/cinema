import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import orderStorage from "../../../data";
import sendRequest from "../../../utils/sendRequest";

const PaymentPage = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const orderId = query.get('orderId') as string;

  const navigate = useNavigate();

  if (!orderId) {
    navigate('/');

    throw new Error('Order id is not defined');
  }

  const order = orderStorage.getOrder(orderId);

  const sum = order.selected.reduce((acc, p) => {
    return acc + (p.vip ? Number(order.hall.hall_price_vip) : Number(order.hall.hall_price_standart));
  }, 0);

  const goToQrCode = async () => {
    order.state = "ordered";
    orderStorage.saveOrder(order);


    const params = `event=sale_add&timestamp=${order.timestamp}&hallId=${order.hall.hall_id}&seanceId=${order.seance.seance_id}&hallConfiguration=${encodeURIComponent(order.modified_hall_config)}`;

    await sendRequest('POST', 'https://jscp-diplom.netoserver.ru/', params);

    navigate(`/ticket?orderId=${order.id}`);
  }

  return (
    <>
      <main>
        <section className="ticket">

          <header className="tichet__check">
            <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
          </header>

          <div className="ticket__info-wrapper">
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{order.film.film_name}</span>
            </p>
            <p className="ticket__info">Ряд/Место: <span className="ticket__details ticket__chairs">
              {order.selected.map(p => `${p.row}/${p.column}`).join(', ')}
            </span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{order.selected.length}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{order.seance.seance_time}</span></p>
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">
              {sum}
            </span> рублей</p>

            <button
              className="acceptin-button"
              onClick={goToQrCode}
            >
              Получить код бронирования
            </button>

            <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту.
              Покажите QR-код нашему контроллёру у входа в зал.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default PaymentPage;