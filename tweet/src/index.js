import React from "react";
import ReactDOM from "react-dom/client";
import Tweets from "./components/tweet-container";

const App = () => {
  return (
    <Tweets/>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
