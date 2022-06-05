// import { Hour } from "helpers/date";

import "./HourAndDate.css";
import { dataApi } from "interfaces/stories/futureDays.interface";

interface HourAndDateProps {
  currentClimate: dataApi;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  colorDay?: string;
  backgroundColorDay?: string;
}

export const HourAndDate = ({
  currentClimate,
  backgroundColor,
  color,
  borderColor,
  colorDay,
  backgroundColorDay,
  ...props
}: HourAndDateProps) => {
  return (
    <div {...props}>
      <div className="time" id="time">
        13:50
        <span id="am-pm">{new Date().getHours() >= 12 ? "PM" : "AM"}</span>
      </div>
      <div className="date" id="date">
        Sunday, 5 Jun
      </div>
    </div>
  );
};
