import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function FavouritesImage({
  id,
  src,
  name,
  date,
  time,
  airtableId,
  setFavourites,
  favourites,
}) {
  const path = `/events/${id}`;

  const handleDelete = async () => {
    const token =
      "patrKk0ESo0Sua1r5.f10c8d4099609c9c648421754da481ece04b8b1b3bc3d7cebc0cb6e5a96ad5e6";
    const mainUrl = "https://api.airtable.com/v0/appt1pw0Q5y2woB87/Table%201";
    const url = `${mainUrl}/${airtableId}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonData = await response.json();
    setFavourites((favourites) => ({
      records: favourites?.filter((f) => f.id !== jsonData?.id),
    }));
    //* update state in react
  };

  return (
    <div>
      <Link to={path}>
        <img src={`${src}`} width="200"></img>
      </Link>
      <p>{name}</p>
      <p>
        {date} | {time}
      </p>
      <button onClick={handleDelete}>Remove from favourites</button>
    </div>
  );
}
