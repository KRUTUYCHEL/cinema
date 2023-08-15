import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import orderStorage from "../../../data";
import format from "date-fns/format";

const TicketPage = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const orderId = query.get('orderId') as string;

  const navigate = useNavigate();

  if (!orderId) {
    navigate('/');

    throw new Error('Order id is not defined');
  }

  const order = orderStorage.getOrder(orderId);

  const chairsText = order.selected.map(p => `${p.row}/${p.column}`).join(', ');
  const day = format(new Date(Number(order.timestamp) * 1000), 'dd.MM.yyyy');
  useEffect(() => {
    const ticketInfoQr = document.querySelector('.ticket__info-qr');
    const stringQR = `Фильм: ${order.film.film_name} Зал: ${order.hall.hall_name} Места: ${chairsText} Сеанс: ${order.seance.seance_id} Дата: ${day}`;

    // @ts-ignore
    const qrcode = window.QRCreator(stringQR, {
      mode: 4,
      eccl: 0,
      version: 8,
      mask: 2,
      image: 'png',
      modsize: 4,
      margin: 0,
    });

    const content = (qrcode: any) => {
      return qrcode.error
        ? `недопустимые исходные данные ${qrcode.error}`
        : qrcode.result;
    };

    // @ts-ignore
    ticketInfoQr.append(content(qrcode));
  }, []);

  return (
    <>
      <main>
        <section className="ticket">

          <header className="tichet__check">
            <h2 className="ticket__check-title">Электронный билет</h2>
          </header>

          <div className="ticket__info-wrapper">
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{order.film.film_name}</span>
            </p>
            <p className="ticket__info">Ряд/Место: <span className="ticket__details ticket__chairs">
               {chairsText}
            </span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{order.selected.length}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{order.seance.seance_time}</span></p>

            <div className="ticket__info-qr"></div>

              <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
              <p className="ticket__hint">Приятного просмотра!</p>
          </div>
        </section>
      </main>
    </>
  )
}
export default TicketPage;
