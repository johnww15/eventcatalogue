import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleEventPage({
  favourites,
  setFavourites,
  isFavourites,
}) {
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

  //---------------//
  // airtable token & url
  const token =
    "patrKk0ESo0Sua1r5.f10c8d4099609c9c648421754da481ece04b8b1b3bc3d7cebc0cb6e5a96ad5e6";
  const url = "https://api.airtable.com/v0/appt1pw0Q5y2woB87/Table%201";

  const addFavourite = async (event) => {
    event.preventDefault();
    console.log("eventId", eventId);
    if (isFavourites(eventId)) {
      return;
    }
    const data = {
      fields: {
        id: eventId,
        src: eventDetails.images[0].url,
        name: eventDetails.name,
        date: eventDetails.dates.start.dateTime,
        favourite: "true",
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    return setFavourites([...favourites, jsonData]);
  };
  //---------------//

  if (!eventDetails) {
    //To have a placeholder while the fetch function is happening
    return <div>Loading...</div>;
  }

  return (
    <div className="singleeventpage">
      <div className="event-details">
        <h1>{eventDetails.name}</h1>
        <h2>{eventDetails._embedded.venues[0].name}</h2>
        <h2>{new Date(eventDetails.dates.start.dateTime).toString()}</h2>
        <img src={eventDetails.images[0].url} width="400" height="auto"></img>
        <br />
      </div>
      <button className="addfavouritebutton" onClick={addFavourite}>
        Add to Favourites
      </button>
      <hr />
      <Link className="backtohome" to="/">
        Back to home
      </Link>
    </div>
  );
}
