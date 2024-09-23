import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  if (hour < 10) {
    return `0${hour}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    return `0${minutes}`;
  }
  return (
    <div>
      {day}, {hour}:{minutes}
    </div>
  );
}
