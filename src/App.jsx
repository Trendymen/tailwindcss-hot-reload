import "./App.css";
import React from "react";
import * as Sentry from "@sentry/react";

const Child = React.lazy(() => import("./DynamicComponent.jsx"));

const App = () => {
  return (
    <div className={"px-15"}>
      <React.Suspense fallback={<span>error</span>}>
        <Child />
      </React.Suspense>
    </div>
  );
};

export default App;
