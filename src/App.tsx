import { Routes, Route, useParams } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ServicesPage from "./components/Services/ServicesPage";
import ComponentsPage from "./ComponentsPage";
import SelectedService from "./components/Services/SelectedService";
import BookingPage from "./components/Services/BookingPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="services" element={<ServicesPage />}></Route>
      <Route path="services/:id" element={<SelectedService />} />
      <Route path="/services/:id/book/:pujaType" element={<BookingPage />} />
      <Route path="ui-components" element={<ComponentsPage />}></Route>
    </Routes>
  );
}

export default App;
