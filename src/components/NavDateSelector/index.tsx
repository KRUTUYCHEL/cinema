import React, { useState } from "react";
import addDays from 'date-fns/addDays'
import Day from "./Day";
import {isSameDay} from "date-fns";

const NavDateSelector = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(() => currentDate);

  const dates = []

  for (let i = 0; i < 7; i++) {
    dates.push(addDays(currentDate, i))
  }

  return (
    <>
      <nav className="page-nav">
        {dates.map(p => (
          <Day
            key={p.getDate()}
            date={p}
            onClick={(date) => setSelectedDate(date)}
            isChosen={isSameDay(p, selectedDate)}
          />
        ))}
      </nav>
    </>
  )
}

export default NavDateSelector;