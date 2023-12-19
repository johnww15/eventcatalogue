import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleEventPage() {
  const params = useParams();
  const eventId = params.eventName;
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=a4x60AAIj63BSvIS5w6vzKG4loo9Kdjs`
      );
      const details = await response.json();
      setEventDetails(details);
    }
    fetchDetails();
  }, [eventId]);

  if (!eventDetails) {
    //To have a placeholder while the fetch function is happening
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{eventDetails.name}</h1>
      <h2>{eventDetails._embedded.venues[0].name}</h2>
      <h2>
        {eventDetails.dates.start.localDate} |{" "}
        {eventDetails.dates.start.localTime}
      </h2>
      <img src={eventDetails.images[0].url} width="400"></img>
      <hr />
      <Link to="/">Back to home</Link>
    </div>
  );
}
