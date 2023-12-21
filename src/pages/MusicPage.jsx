import EventImage from "../components/EventImage";
import { useState, useEffect } from "react";

export default function MusicPage() {
  const [music, setMusic] = useState(null);

  useEffect(() => {
    async function fetchMusic() {
      const response = await fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?segmentName=Music&&apikey=a4x60AAIj63BSvIS5w6vzKG4loo9Kdjs&size=50"
      );
      const music = await response.json();
      setMusic(music._embedded.events);
    }
    fetchMusic();
  }, []);

  if (!music) {
    //To have a placeholder while the fetch function is happening
    return <div>Loading...</div>;
  }

  return (
    <div>
      {music.map((music) => (
        <EventImage
          id={music.id}
          key={music.id}
          src={music.images[0].url}
          name={music.name}
          date={music.dates.start.localDate}
          time={music.dates.start.localTime}
        />
      ))}
    </div>
  );
}
