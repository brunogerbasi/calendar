import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { useSelector } from 'react-redux';

import { CalendarContainer, HeroesEvent } from "./styles";

function Calendar() {

  const storeCalendar = useSelector(state => state);
  const [allEvents, setAllEvents] = useState([])
  const [startEvents, setStartEvents] = useState()


  function dragInDrop() {
    let draggableEl = document.getElementById("heroes-event");    
    new Draggable(draggableEl, {
      itemSelector: ".fc-heroes",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      }
    });
  }

  useEffect(() => {
    return () => {
      dragInDrop()
      handleAllEvents()
    }
  }, [])

  function dropFnc(dropInfo) {    

    setAllEvents([
      ...allEvents,
      {
        title: dropInfo.draggedEl.title,
        date: dropInfo.dateStr
      }

    ]);
    console.log(dropInfo)

    localStorage.setItem("EventsDrop", JSON.stringify(allEvents))
  }
  

  function handleAllEvents() {
    if (localStorage.getItem("EventsDrop")) {
      setStartEvents(
        JSON.parse(localStorage.getItem("EventsDrop"))
      );
      setAllEvents(
        JSON.parse(localStorage.getItem("EventsDrop"))
      )
    }
  }  


  return (
    <>
      <CalendarContainer>
        <h1>Heróis</h1>
        <p>Arraste o Herói para o calendário</p>        

        <HeroesEvent id="heroes-event">
          {
            storeCalendar?.calendar.Calendar.map(event => (
              <div
                className="fc-heroes"
                title={event.name}
                data={event.id}
                key={event.id}
              >
                <h2>{event.name}</h2>
              </div>
            ))
          }
        </HeroesEvent>
        <div>
          <FullCalendar
            initialView="dayGridMonth"
            rerenderDelay={10}
            eventDurationEditable={false}
            editable={true}
            droppable={true}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            events={startEvents}
            selectable={true}
            drop={(dropInfo) => dropFnc(dropInfo)}
          />
        </div>
      </CalendarContainer>
    </>
  )
}

export default Calendar;