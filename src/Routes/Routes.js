import { Routes, Route, Navigate } from "react-router-dom";

import HomeView from "../pages/Home/components/HomeView";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import CounterOfCountersContainer from "../pages/CounterOfCounters/containers/CounterOfCountersContainer";
import { ROUTE_NAMES } from "./routeNames";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomeView />} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route path={ROUTE_NAMES.COUNTERS} element={<CounterOfCountersContainer />} />
      <Route path="*" element={<Navigate to={ROUTE_NAMES.HOME} />} />
    </Routes>
  );
};

export default Router;
