import Navber from "./components/Navber";
import { publicRoute } from "../src/routes/publicRoute";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // ..
    AOS.init();
  }, []);
  return (
    <>
      <Navber>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </Navber>
    </>
  );
}

export default App;
