import React from 'react';
import s from './styles.module.scss';

const App = ()  =>{
  return (
    <>
      <header className={s.header}>
        <h1 className={s.title}>Идём<span>в</span>кино</h1>
      </header>
      <div>Page</div>
    </>
  );
}

export default App;
