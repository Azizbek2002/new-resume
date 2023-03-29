import "./App.css";
import Home from "./Home";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
