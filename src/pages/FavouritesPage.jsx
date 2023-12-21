import { useState, useEffect } from "react";
import FavouritesImage from "../components/FavouritesImage";

export default function FavouritesPage({ favourites, setFavourites }) {
  console.log("favourites", favourites);

  if (!favourites) {
    //To have a placeholder while the fetch function is happening
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>This is the favourites page</h2>
      {favourites?.map((favourite) => (
        <FavouritesImage
          id={favourite.fields.id}
          key={favourite.fields.id}
          src={favourite.fields.src}
          name={favourite.fields.name}
          date={favourite.fields.date}
          time={favourite.fields.time}
          airtableId={favourite.id}
          setFavourites={setFavourites}
          favourites={favourites}
        />
      ))}
    </div>
  );
}
