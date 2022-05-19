import Navber from "./components/Navber";
import { publicRoute } from "../src/routes/publicRoute";
import { protectedRoute } from "../src/routes/protectedRoute";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RequireAuth from "./Authentication/RequireAuth";
import Services from "./pages/Services";

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
          <Route element={<RequireAuth />}>
            <Route path="/services" element={<Services></Services>}></Route>
          </Route>
        </Routes>
      </Navber>
    </>
  );
}

export default App;
