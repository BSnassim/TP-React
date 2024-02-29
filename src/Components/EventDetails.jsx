import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventsApi from "../api/EventsApi";

const EventDetails = () => {
  const { id } = useParams();
  const [eventDetails,setEventDetails] = useState();
  
  useEffect(() => {
    EventsApi.getEvents(id).then((data) => {
      setEventDetails(data);
    });
  }, []);
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
