import { Container } from "react-bootstrap";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Header from "./Component/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Header></Header>
      <Container>
        <AnimatePresence wait>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;
