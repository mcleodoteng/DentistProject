import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AdviceCare from "./pages/AdviceCare";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import PatientPortal from "./pages/PatientPortal";
import Login from "./pages/PatientPortal/Login";
import AuthRequired from "./components/shared/AuthRequired";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="advice-care" element={<AdviceCare />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="contact" element={<Contact />} />
          <Route path="patient-portal" element={<AuthRequired />}>
            <Route index element={<PatientPortal />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    // Remove AOS since we're using Framer Motion
    // AOS can cause conflicts and performance issues
  }, []);

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
