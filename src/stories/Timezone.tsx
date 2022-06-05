import { TimezoneProps } from "interfaces/stories/timezone.interface";

export const Timezone = ({ color, climate, ...props }: TimezoneProps) => {
  return (
    <div className="place-container" {...props}>
      <div className="time-zone" id="time-zone">
        <span style={{ color }}>{climate?.timezone}</span>
      </div>
      <div id="country" className="country">
        <span style={{ color }}>
          {climate?.timezone ? climate?.lat + "N" + climate?.lon + "E" : ""}
        </span>
      </div>
    </div>
  );
};
