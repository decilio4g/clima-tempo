export interface TimezoneProps {
  climate?: {
    lat?: number;
    lon?: number;
    timezone?: string;
    timezone_offset?: number;
  };

  backgroundColor?: string;
  color?: string;
}
