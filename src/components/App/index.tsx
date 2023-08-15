import React from 'react';
import PageRoutes from "../../routes";

const App = () => {
  return (
    <>
      <header className="page-header">
        <a href="/cinema/build" className="page-header__title_a">
          <h1 className="page-header__title">Идём<span>в</span>кино</h1>
        </a>
      </header>
      <PageRoutes/>
    </>
  );
}

export default App;
