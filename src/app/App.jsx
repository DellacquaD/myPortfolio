import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "../index.css";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";

// const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

function App() {
    logCredits();

    return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Route path="*" component={PageNotFound} />
      </Routes>
    );
};

export default App;
