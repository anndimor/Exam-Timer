import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigator from "./components/Navigator/Navigator";
import Yks from "./pages/Yks";
import Lgs from "./pages/Lgs";
import Kpss from "./pages/Kpss";
import Custom from "./pages/Custom";
import { Toaster } from "react-hot-toast";

function App() {
   return (
      <BrowserRouter>
         <Toaster position="top-center" reverseOrder={true} />
         <Navigator />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yks-sayaci" element={<Yks />} />
            <Route path="/lgs-sayaci" element={<Lgs />} />
            <Route path="/kpss-sayaci" element={<Kpss />} />
            <Route path="/custom" element={<Custom />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
