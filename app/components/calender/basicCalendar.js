import * as React from "react"
import dayjs from "dayjs"
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"

export default function BasicCalender({
  onDateSelected,
  numberOfAvailableDates,
}) {
  const [value, setValue] = React.useState(dayjs())
  const currentDate = dayjs()

  const shouldDisableDate = (date) => {
    if (!numberOfAvailableDates) return false

    return (
      !currentDate.isSame(date, "day") &&
      date.diff(currentDate, "day") > numberOfAvailableDates - 1
    )
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar
            value={value}
            onChange={(newValue) => {
              setValue(newValue)
              onDateSelected(newValue.toISOString())
            }}
            minDate={currentDate}
            shouldDisableDate={shouldDisableDate}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}
