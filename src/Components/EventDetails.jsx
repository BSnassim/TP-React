import React from "react";
import { useParams } from "react-router-dom";
import eventsList from "../../data/events.json";

const EventDetails = () => {
  const { name } = useParams();
  const eventDetails = eventsList.find((event) => event.name === name);
  return (
    <div>
      {eventDetails && (
        <div>
          <img height={"150px"} src={eventDetails.nbTickets == 0 ? `../images/sold_out.png` : `../images/${eventDetails.img}`} />
          <h3>{eventDetails.name}</h3>
          <p>Description : {eventDetails.description}</p>
          <p>Number of participants : {eventDetails.date}</p>
          <p>Number of available tickets : {eventDetails.nbTickets}</p>
          <p>Ticket price : {eventDetails.price}</p>
        </div>
      )}
      {!eventDetails && <h1>Event not found</h1>}
    </div>
  );
};

export default EventDetails;
