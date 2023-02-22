import React from "react";
import Slide from "./Slide";

const slides = [
  { id: "s1", text: "Slide-1" },
  { id: "s2", text: "Slide-2" },
  { id: "s3", text: "Slide-3" }
];

const App = () => {
  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};
export default App;
