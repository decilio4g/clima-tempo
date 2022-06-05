import { format } from "date-fns";

export function Hour(hour: number) {
  if (hour) {
    hour = hour * 1000;
    return format(hour, "HH:mm a");
  }
  return "";
}

export function CurrentHour(date: Date) {
  if (date) {
    return format(date, "HH:mm");
  }
  return "";
}

export function Month(day: number, formatType: string) {
  if (day) {
    day = day * 1000;
    return format(day, formatType);
  }
  return "";
}
