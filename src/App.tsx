import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import ServicesPage from "./components/Services/ServicesPage";
import ComponentsPage from "./ComponentsPage";
import SelectedService from "./components/Services/SelectedService";
import BookingPage from "./components/Services/BookingPage";
import BirthChartService from "./components/Services/BirthChartService";
import CateringService from "./components/Services/CateringService";
import HoroscopeService from "./components/Services/HoroscopeService";
import EducationService from "./components/Services/EducationService";
import Users from "./components/Users";
import AddPujaOrParihara from "./components/AddPujaOrParihara";
import AddPandith from "./components/AddPandith";
import PujaPariharaList from "./components/PujaPariharaList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="services" element={<ServicesPage />}></Route>
      <Route path="services/:id" element={<SelectedService />} />
      <Route path="/services/:id/book/:pujaType" element={<BookingPage />} />
      <Route path="services/birth-chart/:id" element={<BirthChartService />} />
      <Route path="services/catering/:id" element={<CateringService />} />
      <Route path="services/horoscope/:id" element={<HoroscopeService />} />
      <Route path="services/education/:id" element={<EducationService />} />
      <Route path="ui-components" element={<ComponentsPage />}></Route>
      <Route path="users" element={<Users />}></Route>
      <Route path="addpuja" element={<AddPujaOrParihara />}></Route>
      <Route path="addPandith" element={<AddPandith />}></Route>
      <Route path="listofpujas" element={<PujaPariharaList />}></Route>
    </Routes>
  );
}

export default App;
