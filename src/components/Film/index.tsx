import React from "react";


interface FilmProps {

  id: string;
  name: string;
  duration: string;
  description: string;
  origin: string;
  poster: string;
}

const Film = ({ id, name, duration , description , origin, poster}: FilmProps) => {
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

      <div className="movie-seances__hall">
        <h3 className="movie-seances__hall-title">Зал 1</h3>
        <ul className="movie-seances__list">
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">10:20</a>
          </li>
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">14:10</a>
          </li>
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">18:40</a>
          </li>
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">22:00</a>
          </li>
        </ul>
      </div>
      <div className="movie-seances__hall">
        <h3 className="movie-seances__hall-title">Зал 2</h3>
        <ul className="movie-seances__list">
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">11:15</a>
          </li>
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">14:40</a>
          </li>
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">16:00</a>
          </li>
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">18:30</a>
          </li>
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">21:00</a>
          </li>
          <li className="movie-seances__time-block"><a className="movie-seances__time" href="hall.html">23:30</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Film;