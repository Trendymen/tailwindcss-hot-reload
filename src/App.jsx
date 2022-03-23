import "./App.css";
import React from "react";

const Child = React.lazy(() =>
  import("./DynamicComponent.jsx").then((module) => ({
    default: module.DynamicComponent,
  }))
);

const App = () => {
  return (
    <div className={"px-15"}>
      <React.Suspense fallback={<span>loading</span>}>
        <Child />
      </React.Suspense>
    </div>
  );
};

export default App;
