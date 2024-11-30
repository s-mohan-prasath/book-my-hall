"use client"
import { Calendar, dayjsLocalizer } from "react-big-calendar"
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import dayjs from "dayjs"
import { useCallback, useState } from "react"

const DnDCalendar = withDragAndDrop(Calendar)
const localizer = dayjsLocalizer(dayjs)

export default function draft() {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "WAD project discussion",
            start: new Date(2024, 10, 30, 19, 15, 0, 0),
            end: new Date(2024, 10, 30, 21, 0, 0, 0),
        }
    ])
    const handleEventPropChange = useCallback(({ event, start, end }) => {
        setEvents((prevEvents) => {
            let updatedEvents = prevEvents.map((ev) => {
                if (ev.id == event.id) {
                    return { ...ev, start, end }
                }
                return ev;
            })
            return updatedEvents
        })
    }, [events])
    return (
        <div style={{ marginBottom: "500px", padding: "0 40px" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "40px", padding: "10px" }}>Event Calendar Page</h1>
            <DnDCalendar
                localizer={localizer}
                events={events}
                startAccessor={"start"}
                endAccessor={"end"}
                draggableAccessor={(event) => true}
                style={{ height: "80vh" }}
                onEventResize={handleEventPropChange}
                onEventDrop={handleEventPropChange}
            />
        </div>
    )
}