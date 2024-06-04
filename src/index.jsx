import "./style.css";
import ReactDOM from "react-dom/client";
import { Leva } from "leva";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <Leva />
    <App />
  </>
);
