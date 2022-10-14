import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HorrorStory from "./components/HorrorStory/HorrorStory";

function App() {
  return (
    <>
      <HorrorStory />
    </>
  );
}

export default App;
