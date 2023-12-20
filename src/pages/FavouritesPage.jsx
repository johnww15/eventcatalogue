import { useState, useEffect } from "react";
import FavouritesImage from "../components/FavouritesImage";

export default function FavouritesPage({ favourites, setFavourites }) {
  // airtable token & url
  const token =
    "patrKk0ESo0Sua1r5.f10c8d4099609c9c648421754da481ece04b8b1b3bc3d7cebc0cb6e5a96ad5e6";
  const url = "https://api.airtable.com/v0/appt1pw0Q5y2woB87/Table%201";

  useEffect(() => {
    (async function () {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setFavourites(data);
    })();
  }, []);

  console.log("favourites", favourites);

  if (!favourites) {
    //To have a placeholder while the fetch function is happening
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>This is the favourites page</h2>
      {favourites.records.map((favourite) => (
        <FavouritesImage
          id={favourite.fields.id}
          key={favourite.fields.id}
          src={favourite.fields.src}
          name={favourite.fields.name}
          date={favourite.fields.date}
          time={favourite.fields.time}
        />
      ))}
    </div>
  );
}
