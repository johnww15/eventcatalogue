import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import SingleEventPage from "./pages/SingleEventPage";
import SportsPage from "./pages/SportsPage";
import MusicPage from "./pages/MusicPage";
import NavBar from "./components/NavBar";
import FavouritesPage from "./pages/FavouritesPage";

export default function App() {
  const [favourites, setFavourites] = useState([]);

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
      setFavourites(data.records);
    })();
  }, []);

  function isFavourites(id) {
    return favourites.some((records) => records.fields.id === id);
  }

  return (
    <>
      <div className="app">
        <h1>Ticketmaster Events</h1>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/events/:eventName"
          element={
            <SingleEventPage
              favourites={favourites}
              setFavourites={setFavourites}
              isFavourites={isFavourites}
            />
          }
        />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route
          path="/favourites"
          element={
            <FavouritesPage
              favourites={favourites}
              setFavourites={setFavourites}
            />
          }
        />
      </Routes>
    </>
  );
}
