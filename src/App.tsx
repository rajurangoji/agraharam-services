import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ServicesPage from "./components/ServicesPage";
import ComponentsPage from "./ComponentsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="services" element={<ServicesPage />}></Route>
      <Route path="ui-components" element={<ComponentsPage />}></Route>
    </Routes>
  );
}

export default App;
