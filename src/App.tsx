import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About.js";
import Services from "./components/Services";
import ServicesReact from "./components/ServicesReact";
import ServicesWriting from "./components/ServicesWriting";
import ServicesUI from "./components/ServicesUI";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="select-none App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />}>
            {/*  //nested router */}
            <Route index element={<ServicesReact />} />
            <Route path="react" element={<ServicesReact />} />
            <Route path="writing" element={<ServicesWriting />} />
            <Route path="ui" element={<ServicesUI />} />
          </Route>

          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* the remaining 2 features that will be built later, will be redirected to "about"
          using <navigate />
          replace keyword is set to set replace={true} -used so that we can go to the previos on hitting back ---????*/}

          <Route
            path="/contactUs"
            element={<Navigate to="/contact" replace />}
          />
          {/* * is for any invalid path other than those declared above */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
