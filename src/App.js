import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigator from "./components/Navigator/Navigator";
import Tyt from "./pages/Tyt";
import Ayt from "./pages/Ayt";
import Lgs from "./pages/Lgs";
import Kpss from "./pages/Kpss";

function App() {
   return (
      <BrowserRouter>
         <Navigator />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ayt-sayaci" element={<Ayt />} />
            <Route path="/tyt-sayaci" element={<Tyt />} />
            <Route path="/lgs-sayaci" element={<Lgs />} />
            <Route path="/kpss-sayaci" element={<Kpss />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
