import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import sendRequest from "../../../utils/sendRequest";
import HallPlaces from "../../../components/HallPlaces";
import orderStorage, {SelectedPlace} from '../../../data';

const HallPage = () => {
  let { search } = useLocation();
  const query = new URLSearchParams(search);
  const orderId = query.get('orderId') as string;

  const navigate = useNavigate();

  if (!orderId) {
    navigate('/');

    throw new Error('Order id is not defined');
  }

  const order = orderStorage.getOrder(orderId);

  const [selectedPlaces, setSelectedPlaces] = useState<SelectedPlace[]>([]);
  const [modifiedHallConfig, setModifiedHallConfig] = useState<string>('');

  console.log(order);

  const params = `event=get_hallConfig&timestamp=${order.timestamp}&hallId=${order.hall.hall_id}&seanceId=${order.seance.seance_id}`;


  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const serverData = await sendRequest('POST', 'https://jscp-diplom.netoserver.ru/', params);

      setData(serverData || order.hall.hall_config);
    }
    catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  const bookSeats = () => {
    order.selected = selectedPlaces;
    order.state = 'confirmation';
    order.modified_hall_config = modifiedHallConfig;
    orderStorage.saveOrder(order);

    navigate(`/payment?orderId=${order.id}`);
  }

  if (loading){
    return <div>LOADING.......</div>
  }
    return (
    <>
      <main>
        <section className="buying">
          <div className="buying__info">
            <div className="buying__info-description">
              <h2 className="buying__info-title">{order.film.film_name}</h2>
              <p className="buying__info-start">Начало сеанса: {order.seance.seance_time}</p>
              <p className="buying__info-hall">{order.hall.hall_name}</p>
            </div>
            <div className="buying__info-hint">
              <p>Тапните дважды,<br></br>чтобы увеличить</p>
            </div>
          </div>
          <div className="conf-step">
            <div className="conf-step__wrapper">
              {data && (
                <HallPlaces
                  value={selectedPlaces}
                  onUpdate={(value) => {
                    setSelectedPlaces(value);
                  }}
                  onUpdateHtml={html => {
                    setModifiedHallConfig(html);
                  }}
                  html={data}
                />
              )}
            </div>
            <div className="conf-step__legend">
              <div className="col">
                <p className="conf-step__legend-price">
                  <span className="conf-step__chair conf-step__chair_standart"></span> Свободно (
                  <span
                  className="conf-step__legend-value price-standart">{order.hall.hall_price_standart}
                  </span>руб)
                </p>
                <p className="conf-step__legend-price">
                  <span className="conf-step__chair conf-step__chair_vip">
                  </span> Свободно VIP (<span
                  className="conf-step__legend-value price-vip">{order.hall.hall_price_vip}</span>руб)</p>
              </div>
              <div className="col">
                <p className="conf-step__legend-price">
                  <span className="conf-step__chair conf-step__chair_taken"></span> Занято
                </p>
                <p className="conf-step__legend-price">
                  <span className="conf-step__chair conf-step__chair_selected"></span> Выбрано
                </p>
              </div>
            </div>
          </div>
          <button
            className="acceptin-button"
            onClick={bookSeats}
          >
            Забронировать
          </button>
        </section>
      </main>
    </>
  )
}

export default HallPage;