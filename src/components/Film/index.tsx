import React from "react";

export interface Seance {
  id: string;
  startTime: string;
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

  data: Hall[];

  onSeanceClick: (seanceId: string) => void;
}

const Film = ({ id, name, duration , description , origin, poster, data, onSeanceClick}: FilmProps) => {
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
            {hall.seances.map( seance => (
              <li
                className="movie-seances__time-block"
                key={seance.id}
                onClick={(e) => {
                  e.preventDefault();
                  onSeanceClick(seance.id);
                }}
              >
                <a className="movie-seances__time" href="#">
                  {seance.startTime}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Film;