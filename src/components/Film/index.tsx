import React from "react";
import {isAfter} from "date-fns";

export interface Seance {
  id: string;
  startTime: string;
  seanceStart: string;
}

export interface Hall {
  id: string;
  name: string;
  seances: Seance[];
}

export interface FilmProps {
  id: string;
  name: string;
  duration: string;
  description: string;
  origin: string;
  poster: string;
  selectedDate: Date;

  data: Hall[];

  onSeanceClick: (seanceId: string) => void;
}

const Film = ({ selectedDate, name, duration , description , origin, poster, data, onSeanceClick}: FilmProps) => {
  return (
    <section className="movie">
      <div className="movie__info">
        <div className="movie__poster">
          <img className="movie__poster-image" alt="Звёздные войны постер" src={poster} />
        </div>
        <div className="movie__description">
          <h2 className="movie__title">{name}</h2>
          <p className="movie__synopsis">{description}</p>
          <p className="movie__data">
            <span className="movie__data-duration">{duration}</span>
            <span className="movie__data-origin">{origin}</span>
          </p>
        </div>
      </div>
      {data.map( hall => (
        <div className="movie-seances__hall" key = {hall.id}>
          <h3 className="movie-seances__hall-title">{hall.name}</h3>
          <ul className="movie-seances__list">
            {hall.seances.map( seance => {
              const currentDate = selectedDate;
              let selectedYear = currentDate.getFullYear();
              let selectedMonth = currentDate.getMonth();
              let selectedDay = currentDate.getDate();
              const seanceStartHours = Math.trunc(
                Number(seance.seanceStart) / 60
              );
              const seanceStartMinutes =
                Number(seance.seanceStart) % 60;
              const seanceStartDate = new Date(
                selectedYear,
                selectedMonth,
                selectedDay,
                seanceStartHours,
                seanceStartMinutes
              );
              const enabled = isAfter(seanceStartDate, new Date());
              return (
                <li
                  className="movie-seances__time-block"
                  key={seance.id}
                  onClick={(e) => {
                    e.preventDefault();
                    enabled && onSeanceClick(seance.id);
                  }}
                >
                  <button
                    className="movie-seances__time-button"
                    disabled={!enabled}
                  >
                    <a className="movie-seances__time" href="#">
                      {seance.startTime}
                    </a>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Film;