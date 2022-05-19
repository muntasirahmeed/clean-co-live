import About from "../pages/About";
import Services from "../pages/Services";
export const protectedRoute = [
  { path: "/about", name: "About", Component: About },
  { path: "/services", name: "Services", Component: Services },
];
