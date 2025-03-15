import { Routes, Route, useParams } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ServicesPage from "./components/Services/ServicesPage";
import ComponentsPage from "./ComponentsPage";
import SelectedService from "./components/Services/SelectedService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="services" element={<ServicesPage />}></Route>
      <Route path="services/:id" element={<SelectedService />} />
      <Route path="ui-components" element={<ComponentsPage />}></Route>
    </Routes>
  );
}

export default App;
