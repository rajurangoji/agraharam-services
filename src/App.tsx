import planet from "./assets/galaxy-planet-.webp";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <div
        style={{ backgroundImage: `url(${planet})` }}
        className="w-full h-screen bg-cover bg-center"
      >
        <Home />
      </div>
      <Services />
    </div>
  );
}

export default App;
