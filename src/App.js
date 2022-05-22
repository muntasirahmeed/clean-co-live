import Navber from "./components/Navber";
import { publicRoute } from "../src/routes/publicRoute";
import { protectedRoute } from "../src/routes/protectedRoute";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RequireAuth from "./Authentication/RequireAuth";
import Services from "./pages/Services";
import About from "./pages/About";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddService from "./pages/Dashboard/AddService";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import Footer from "./components/Footer";

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
            {protectedRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="add-service" element={<AddService />}></Route>
              <Route path="add-admin" element={<AddAdmin />}></Route>
            </Route>
          </Route>
        </Routes>
      </Navber>
      <Footer></Footer>
    </>
  );
}

export default App;
