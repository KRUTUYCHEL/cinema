import React from "react";
import addDays from 'date-fns/addDays'
import Day from "./Day";
import {isSameDay} from "date-fns";

export interface NavDateSelectorProps {
  value: Date;
  onChange: (date: Date) => void;
}

const NavDateSelector = ({ value: selectedDate, onChange: setSelectedDate }: NavDateSelectorProps) => {
  const currentDate = new Date();

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