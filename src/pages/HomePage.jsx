import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventImage from "../components/EventImage";

export default function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?apikey=a4x60AAIj63BSvIS5w6vzKG4loo9Kdjs&size=50"
      );
      const events = await response.json();
      console.log("innerarray", events._embedded.events);
      setEvents(events._embedded.events);
    }
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>This is the home page</h2>
      <hr />
      {events.map((event) => (
        <EventImage
          id={event.id}
          key={event.id}
          src={event.images[0].url}
          name={event.name}
          date={event.dates.start.localDate}
          time={event.dates.start.localTime}
        />
      ))}
    </div>
  );
}
