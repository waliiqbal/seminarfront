import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Donate from "./pages/Donate";
import Success from "./pages/Success";
import Thanks from "./pages/Thanks";
import "./styles/ui.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/success" element={<Success />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}
