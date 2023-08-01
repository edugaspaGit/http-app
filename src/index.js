import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
    dsn: "https://091bc59aa8f9bf00f078ebc272423afd@o4505625999310848.ingest.sentry.io/4505626005078016",
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
