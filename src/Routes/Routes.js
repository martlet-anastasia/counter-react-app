import { Routes, Route } from "react-router-dom";

import HomeView from "../pages/Home/components/HomeView";
import CounterContainer from "../pages/Counter/containers/CounterContainer";

import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeView />} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
    </Routes>
  );
};

export default Router;