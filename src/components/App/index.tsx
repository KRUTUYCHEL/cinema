import React from 'react';
import s from './styles.module.scss';
import PageRoutes from "../../routes";

const App = ()  =>{
  return (
    <>
      <header className={s.header}>
        <h1 className={s.title}>Идём<span>в</span>кино</h1>
      </header>
      <PageRoutes/>
    </>
  );
}

export default App;
