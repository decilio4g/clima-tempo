import { dataApi } from "interfaces/components/timezone.interface";

import "./styles.css";

export function Timezone({ climate }: dataApi) {
  return (
    <div className="place-container">
      <div className="time-zone" id="time-zone">
        {climate?.timezone}
      </div>
      <div id="country" className="country">
        {climate?.timezone ? climate?.lat + "N" + climate?.lon + "E" : ""}
      </div>
    </div>
  );
}
