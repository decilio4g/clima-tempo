import { CurrentHour } from "helpers/date";
import monthAndDays from "helpers/monthAndDays";

import "./styles.css";

export function CurrentHourAndDate() {
  return (
    <>
      <div className="time" id="time">
        {CurrentHour(new Date())}
        <span id="am-pm">{new Date().getHours() >= 12 ? "PM" : "AM"}</span>
      </div>
      <div className="date" id="date">
        {monthAndDays.Days[new Date().getDay()]}, {new Date().getDate()}{" "}
        {monthAndDays.Months[new Date().getMonth()]}
      </div>
    </>
  );
}
