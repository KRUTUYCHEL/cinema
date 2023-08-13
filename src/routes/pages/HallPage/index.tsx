import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import sendRequest from "../../../utils/sendRequest";
import HallPlaces, {Selected} from "../../../components/HallPlaces";

const HallPage = () => {
  let { search } = useLocation();

  const [selectedPlaces, setSelectedPlaces] = useState<Selected[]>([]);

  const query = new URLSearchParams(search);
  const tm = query.get('timestamp');
  const hallId = query.get('hallId');
  const seanceId = query.get('seanceId');

  console.log(query, tm, hallId, seanceId);

  const params = `event=get_hallConfig&timestamp=${tm}&hallId=${hallId}&seanceId=${seanceId}`;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [film, setFilm] = useState<any>(null);
  const [hall, setHall] = useState<any>(null);
  const [seance, setSeance] = useState<any>(null);
  const loadData = async () => {
    setLoading(true);
    try {
      const fullServerData = await sendRequest('POST', 'https://jscp-diplom.netoserver.ru/', 'event=update') as any;
      const serverData = await sendRequest('POST', 'https://jscp-diplom.netoserver.ru/', params);

      const seance = fullServerData.seances.result.find((p: any) => p.seance_id === seanceId);
      const hall = fullServerData.halls.result.find((s: any) => s.hall_id === hallId);
      const film = fullServerData.films.result.find((d: any) => d.film_id === seance.seance_filmid);

      setSeance(seance);
      setHall(hall);
      setFilm(film)
      setData(serverData || hall.hall_config);

      console.log(fullServerData)
    }
    catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading){
    return <div>LOADING.......</div>
  }
    return (
    <>
      <main>
        <section className="buying">
          <div className="buying__info">
            <div className="buying__info-description">
              <h2 className="buying__info-title">{film.film_name}</h2>
              <p className="buying__info-start">Начало сеанса: {seance.seance_time}</p>
              <p className="buying__info-hall">{hall.hall_name}</p>
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
                  onUpdate={(value, html) => {
                    setSelectedPlaces(value);
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
                  className="conf-step__legend-value price-standart">250
                  </span>руб)
                </p>
                <p className="conf-step__legend-price">
                  <span className="conf-step__chair conf-step__chair_vip">
                  </span> Свободно VIP (<span
                  className="conf-step__legend-value price-vip">350</span>руб)</p>
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
          <button className="acceptin-button">Забронировать</button>
        </section>
      </main>
    </>
  )
}

export default HallPage;