import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '@styles/MiniCalendar.css'

type DateSelected = Date | null

type CalendarDate = DateSelected | [DateSelected, DateSelected]

interface Props {
  selectRange: boolean
}

export function MiniCalendar({ selectRange }: Props): React.JSX.Element {
  const currentDate: Date = new Date()
  const [dateSelected, setDateSelected] = useState<CalendarDate>(currentDate)

  return <Calendar onChange={setDateSelected} value={dateSelected} selectRange={selectRange} maxDate={currentDate} tileContent={<p className="text-gray-950 text-xl font-bold" />} />
}
