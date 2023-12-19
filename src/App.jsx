import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import SingleEventPage from "./pages/SingleEventPage";
import FormPage from "./pages/FormPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventName" element={<SingleEventPage />} />
        <Route path="/createEvent" element={<FormPage />} />
      </Routes>
    </>
  );
}
