import ReactDom from "react-dom";
import React from "react";
import * as Sentry from "@sentry/react";
import {BrowserTracing} from "@sentry/tracing";

Sentry.init({
    dsn: "https://1cb734f3a32e4f75bee9e623f947542b@o1174418.ingest.sentry.io/6270394",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

const App = React.lazy(() => import("./App.jsx"));

ReactDom.render(
  React.createElement(
    React.StrictMode,
    {},
    React.createElement(
      React.Suspense,
      { fallback: React.createElement("span", {}, "error") },
        <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
            <App />
        </Sentry.ErrorBoundary>
    )
  ),
  document.querySelector("#root")
);
