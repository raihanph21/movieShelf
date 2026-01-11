import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./AppV2.jsx";

// import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={10} messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating color="red" className="test" defaultRating={3} />
    <Test /> */}
  </StrictMode>
);

export default App;
