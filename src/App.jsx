import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import SingleEventPage from "./pages/SingleEventPage";
import FormPage from "./pages/FormPage";
import SportsPage from "./pages/SportsPage";
import MusicPage from "./pages/MusicPage";
import NavBar from "./components/NavBar";
import FavouritesPage from "./pages/FavouritesPage";

export default function App() {
  const [favourites, setFavourites] = useState([]);

  function isFavourites(id) {
    return favourites.some((records) => records.fields.id === id);
  }

  return (
    <>
      <div className="app">
        <h1>Events</h1>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
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
        <Route path="/createEvent" element={<FormPage />} />
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
