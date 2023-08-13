import React from 'react';
import s from './styles.module.scss';
import PageRoutes from "../../routes";
import {Link} from "react-router-dom";

const App = ()  =>{
  return (
    <>
      <header className={s.header}>
        <Link to="/">
          <h1 className={s.title}>Идём<span>в</span>кино</h1>
        </Link>
      </header>
      <PageRoutes/>
    </>
  );
}

export default App;
