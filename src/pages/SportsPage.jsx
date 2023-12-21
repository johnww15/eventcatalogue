import EventImage from "../components/EventImage";
import { useState, useEffect } from "react";

export default function SportsPage() {
  const [sports, setSports] = useState(null);

  useEffect(() => {
    async function fetchSports() {
      const response = await fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?segmentName=Sports&&apikey=a4x60AAIj63BSvIS5w6vzKG4loo9Kdjs&size=50"
      );
      const sports = await response.json();
      setSports(sports._embedded.events);
    }
    fetchSports();
  }, []);

  if (!sports) {
    //To have a placeholder while the fetch function is happening
    return <div>Loading...</div>;
  }

  return (
    <div>
      {sports.map((sport) => (
        <EventImage
          id={sport.id}
          key={sport.id}
          src={sport.images[0].url}
          name={sport.name}
          date={sport.dates.start.dateTime}
        />
      ))}
    </div>
  );
}
