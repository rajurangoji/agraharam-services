import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ServicesPage from "./components/ServicesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="services" element={<ServicesPage />}></Route>
    </Routes>
  );
}

export default App;
