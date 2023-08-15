import React from "react";
import classNames from "classnames";
import format from 'date-fns/format';
import {isToday, isWeekend} from "date-fns";

interface DayProps {
  date: Date;
  isChosen: boolean;
  onClick: (date: Date) => void;
}

const Day = ({ date, isChosen, onClick }: DayProps) => {
  return (
    <a
      className={classNames('page-nav__day', {
        'page-nav__day_today': isToday(date),
        'page-nav__day_chosen': isChosen,
        'page-nav__day_weekend': isWeekend(date)
      })}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(date)
      }}
    >
      <span className="page-nav__day-week">
        {format(date, 'EEEEEE')}
      </span>
      <span className="page-nav__day-number">
        {format(date, 'dd')}
      </span>
    </a>
  )
}

export default Day;