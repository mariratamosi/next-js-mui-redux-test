import * as React from "react";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

const generateTimeIntervals = (startTime, endTime, interval) => {
  const intervals = [];
  let currentTime = startTime.clone(); // Assuming startTime is a valid moment or dayjs object

  while (currentTime.isBefore(endTime) || currentTime.isSame(endTime)) {
    intervals.push(currentTime.format("hh:mm A"));
    currentTime = currentTime.add(interval, "minutes");
  }

  return intervals;
};

const TimeButtons = ({ onTimeClick }) => {
  const startTime = dayjs("2023-11-11 02:00 AM");
  const endTime = dayjs("2023-11-11 05:00 AM");
  const interval = 30; // in minutes
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const timeIntervals = generateTimeIntervals(startTime, endTime, interval);
  const handleTimeClick = (time, index) => {
    console.log(time, index);
    setSelectedIndex(index);
    onTimeClick(time);
  };

  return (
    <div className="flex flex-col justify-start items-center m-8 mt-0">
      {timeIntervals.map((time, index) => (
        <Button
          key={index}
          variant={
            selectedIndex != -1 && selectedIndex === index
              ? "contained"
              : "outlined"
          }
          color="primary"
          sx={{ marginTop: 2, width: "90%" }}
          onClick={() => handleTimeClick(time, index)}
        >
          {time}
        </Button>
      ))}
    </div>
  );
};

export default TimeButtons;
