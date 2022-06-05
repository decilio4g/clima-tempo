// import { Hour } from "helpers/date";

import "./hourAndDate.css";
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
  backgroundColor,
  color,
  borderColor,
  ...props
}: HourAndDateProps) => {
  return (
    <div
      className="date-container"
      style={{
        backgroundColor,
        border: borderColor ? `1px solid ${borderColor}` : "",
      }}
      {...props}
    >
      <div style={{ color }} className="time" id="time">
        13:50{" "}
        <span style={{ color }} id="am-pm">
          {new Date().getHours() >= 12 ? "PM" : "AM"}
        </span>
      </div>
      <div style={{ color }} className="date" id="date">
        Sunday, 5 Jun
      </div>
    </div>
  );
};
