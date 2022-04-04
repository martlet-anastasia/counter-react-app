import { Routes, Route } from "react-router-dom";

import NavbarView from "./common/NavbarView";
import CounterContainer from "./pages/Counter/containers/CounterContainer";
import HomeView from "./pages/Home/components/HomeView";

const App = () => {
  return (
    <>
      <NavbarView />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/counter" element={<CounterContainer />} />
      </Routes>
    </>
  );
};

export default App;
