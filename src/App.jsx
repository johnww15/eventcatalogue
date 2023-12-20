import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import SingleEventPage from "./pages/SingleEventPage";
import FormPage from "./pages/FormPage";
import SportsPage from "./pages/SportsPage";
import MusicPage from "./pages/MusicPage";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <div className="app">
        <h1>Events</h1>
      </div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventName" element={<SingleEventPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/createEvent" element={<FormPage />} />
      </Routes>
    </>
  );
}
