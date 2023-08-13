import React from "react";

const TicketPage = () => {
  return (
    <>
      <main>
        <section className="ticket">

          <header className="tichet__check">
            <h2 className="ticket__check-title">Электронный билет</h2>
          </header>

          <div className="ticket__info-wrapper">
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">Звёздные войны XXIII: Атака клонированных клонов</span>
            </p>
            <p className="ticket__info">Ряд/Место: <span className="ticket__details ticket__chairs">6/7, 6/8</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">1</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">18:30</span></p>

            <img className="ticket__info-qr" src="i/qr-code.png"></img>

              <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
              <p className="ticket__hint">Приятного просмотра!</p>
          </div>
        </section>
      </main>
    </>
  )
}
export default TicketPage;
