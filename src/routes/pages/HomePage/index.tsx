import React, {useEffect, useState} from 'react';
import NavDateSelector from '../../../components/NavDateSelector';
import Film, {Hall, Seance} from '../../../components/Film';
import sendRequest from "../../../utils/sendRequest";
import {useNavigate} from "react-router-dom";



const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      // implement here...
      const serverData = await sendRequest('POST', 'https://jscp-diplom.netoserver.ru/', 'event=update');

      setData(serverData);
    }
    catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  let content: any = null;

  if (loading) {
    content = (
      <div>
        Loading...
      </div>
    )
  } else if (!!data) {
    content = data.films.result.map((p: any) => {
      const filmSeances = data.seances.result.filter((r: any) => r.seance_filmid === p.film_id);
      const halls = data.halls.result.filter((h: any) => filmSeances.some((x: any) => h.hall_id === x.seance_hallid))
      const data1: Hall[] = halls.map((h: any)=> ({
        id: h.hall_id,
        name: h.hall_name,
        seances: filmSeances.filter((s: any) => s.seance_hallid === h.hall_id).map((i: any) => ({
          id: i.seance_id,
          startTime: i.seance_time,

        }))
      }));
      return (
        <Film
          key={p.film_id}
          id={p.film_id}
          name={p.film_name}
          duration={p.film_duration}
          description={p.film_description}
          origin={p.film_origin}
          poster={p.film_poster}
          data={data1}
          onSeanceClick={(seanceId) => {
            const seance = data.seances.result.find((p: any) => p.seance_id === seanceId);
            const currentDate = new Date();
            let selectedYear = currentDate.getFullYear();
            let selectedMonth = currentDate.getMonth();
            let selectedDay = currentDate.getDate();
            const seanceStartHours = Math.trunc(
              Number(seance.seance_start) / 60
            );
            const seanceStartMinutes =
              Number(seance.seance_start) % 60;
            const seanceStartDate = new Date(
              selectedYear,
              selectedMonth,
              selectedDay,
              seanceStartHours,
              seanceStartMinutes
            );
            const tm = String(
              seanceStartDate.getTime() / 1000
            );

            navigate(`/hall?timestamp=${tm}&hallId=${seance.seance_hallid}&seanceId=${seance.seance_id}`);
          }}
        />
      );
    })
  }

  return (
    <>
      <NavDateSelector />
      <main>
        {content}
      </main>
    </>
  )
}
export default HomePage;
