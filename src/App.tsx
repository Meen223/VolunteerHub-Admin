import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Navbaradmin from "./components/Card/cloer/NavbarAdmin";

export default function App() {
  const element = useRoutes(routes);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbaradmin /> 
      <div className="flex-1">
        {element}
      </div>
      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        © 2025 VolunteerHub
      </footer>
    </div>
  );
}
