import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleEventPage() {
  const params = useParams();
  const eventName = params.eventname;
  console.log("eventName", eventName);
  const [eventDetails, setEventDetails] = useState([]);
  console.log(eventDetails);

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events/${eventName}.json?apikey=a4x60AAIj63BSvIS5w6vzKG4loo9Kdjs`
      );
      const details = await response.json();
      setEventDetails(details);
    }
    fetchDetails();
  }, [eventName]);

  return (
    <div>
      <h1>This is the single event page</h1>
      <p> placing details of one event below</p>
    </div>
  );
}
