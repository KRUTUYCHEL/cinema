import React from 'react';
import NavDateSelector from '../../../components/NavDateSelector';
import Film from '../../../components/Film';

const HomePage = () => {
  return (
    <>

      <NavDateSelector />
      <main>
        {data.films.result.map(p => (
          <Film
            key={p.film_id}
            id={p.film_id}
            name={p.film_name}
            duration={p.film_duration}
            description={p.film_description}
            origin={p.film_origin}
            poster={p.film_poster}
          />
        ))}
      </main>
    </>
  )
}
export default HomePage;

const data = {
  "halls": {
    "result": [
      {
        "hall_id": "71",
        "hall_name": "Зал1",
        "hall_rows": "10",
        "hall_places": "10",
        "hall_price_standart": "100",
        "hall_price_vip": "350",
        "hall_open": "1"
      },
      {
        "hall_id": "59",
        "hall_name": "Зал2",
        "hall_rows": "10",
        "hall_places": "10",
        "hall_price_standart": "100",
        "hall_price_vip": "350",
        "hall_open": "1"
      },
      {
        "hall_id": "66",
        "hall_name": "Зал3",
        "hall_rows": "10",
        "hall_places": "10",
        "hall_price_standart": "100",
        "hall_price_vip": "350",
        "hall_open": "1"
      },
      {
        "hall_id": "72",
        "hall_name": "Зал4",
        "hall_rows": "10",
        "hall_places": "10",
        "hall_price_standart": "100",
        "hall_price_vip": "350",
        "hall_open": "0"
      }
    ],
    "err": 0,
    "errMessage": ""
  },
  "films": {
    "result": [
      {
        "film_id": "98",
        "film_name": "Аватар: Путь воды (2022)",
        "film_duration": "192",
        "film_description": "После принятия образа аватара солдат Джейк Салли становится предводителем народа на-ви и берет на себя миссию по защите новых друзей от корыстных бизнесменов с Земли. Теперь ему есть за кого бороться — с Джейком его прекрасная возлюбленная Нейтири. Когда на Пандору возвращаются до зубов вооруженные земляне, Джейк готов дать им отпор.",
        "film_origin": "США",
        "film_poster": "https://jscp-diplom.netoserver.ru/jscp-diplom/img/posters/98.png"
      },
      {
        "film_id": "101",
        "film_name": "Вызов",
        "film_duration": "164",
        "film_description": "Торакальный хирург Женя за месяц должна подготовиться к космическому полету и отправиться на МКС, чтобы спасти космонавта. Удастся ли ей справиться с испытаниями? Сможет ли она преодолеть неуверенность и страхи? Получится ли у нее провести сложнейшую операцию в условиях невесомости, от которой зависят шансы космонавта вернуться на Землю живым?",
        "film_origin": "Россия",
        "film_poster": "https://jscp-diplom.netoserver.ru/jscp-diplom/img/posters/101.png"
      },
      {
        "film_id": "99",
        "film_name": "Джон Уик 4",
        "film_duration": "169",
        "film_description": "Джон Уик находит способ одержать победу над Правлением Кланов. Однако, прежде чем он сможет заслужить свою свободу, ему предстоит сразиться с новым врагом и его могущественными союзниками.",
        "film_origin": "США",
        "film_poster": "https://jscp-diplom.netoserver.ru/jscp-diplom/img/posters/99.png"
      },
      {
        "film_id": "100",
        "film_name": "Кот в сапогах 2: Последнее желание",
        "film_duration": "102",
        "film_description": "Промотав восемь жизней из девяти и до смерти испугавшись пришедшего за ним волка-охотника за головами, Кот в сапогах внимает совету врача и заселяется в дом местной кошатницы. Там он смиряется с установленными порядками, отращивает бороду и теряет тягу к подвигам и приключениям, но только до тех пор, пока не узнаёт о волшебной карте, которая указывает путь к где-то упавшей Звезде желаний. Кот в сапогах твёрдо решает отыскать Звезду, чтобы вернуть свои жизни, и в компании притворявшегося кошачьим пёсика отправляется красть карту у известного коллекционера волшебных предметов Джека Хорнера.\n\n",
        "film_origin": "США, Япония",
        "film_poster": "https://jscp-diplom.netoserver.ru/jscp-diplom/img/posters/100.png"
      }
    ],
    "err": 0,
    "errMessage": ""
  },
  "seances": {
    "result": [
      {
        "seance_id": "71",
        "seance_hallid": "72",
        "seance_filmid": "100",
        "seance_time": "09:00",
        "seance_start": "540",
        "seance_end": "642"
      },
      {
        "seance_id": "65",
        "seance_hallid": "59",
        "seance_filmid": "99",
        "seance_time": "10:00",
        "seance_start": "600",
        "seance_end": "769"
      },
      {
        "seance_id": "67",
        "seance_hallid": "66",
        "seance_filmid": "101",
        "seance_time": "10:00",
        "seance_start": "600",
        "seance_end": "764"
      },
      {
        "seance_id": "62",
        "seance_hallid": "71",
        "seance_filmid": "98",
        "seance_time": "10:10",
        "seance_start": "610",
        "seance_end": "802"
      },
      {
        "seance_id": "69",
        "seance_hallid": "66",
        "seance_filmid": "99",
        "seance_time": "12:50",
        "seance_start": "770",
        "seance_end": "939"
      },
      {
        "seance_id": "63",
        "seance_hallid": "71",
        "seance_filmid": "99",
        "seance_time": "14:20",
        "seance_start": "860",
        "seance_end": "1029"
      },
      {
        "seance_id": "66",
        "seance_hallid": "59",
        "seance_filmid": "100",
        "seance_time": "15:30",
        "seance_start": "930",
        "seance_end": "1032"
      },
      {
        "seance_id": "70",
        "seance_hallid": "66",
        "seance_filmid": "98",
        "seance_time": "16:00",
        "seance_start": "960",
        "seance_end": "1152"
      },
      {
        "seance_id": "64",
        "seance_hallid": "71",
        "seance_filmid": "98",
        "seance_time": "17:20",
        "seance_start": "1040",
        "seance_end": "1232"
      },
      {
        "seance_id": "68",
        "seance_hallid": "59",
        "seance_filmid": "101",
        "seance_time": "18:00",
        "seance_start": "1080",
        "seance_end": "1244"
      }
    ],
    "err": 0,
    "errMessage": ""
  }
};