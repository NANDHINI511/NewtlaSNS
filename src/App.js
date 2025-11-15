import Header from "./components/Header";
import Home from './pages/Home'
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Codeconduct from "./pages/Codeconduct";
import Policy from "./pages/Policy";
import OHSPolicy from "./pages/OHSPolicy";
import ElectricalInstallation from "./pages/ElectricalInstallation"
import Testing from "./pages/Testing";
// import Testing from "./pages/Testing";
import Test from "./pages/test";
import RPP from "./pages/RPP";
import ProjectManagement from "./pages/PMC";
import CivilService from "./pages/CivilService";
import FeedDetailEngineering from "./pages/FDEPSS";
import IServices from "./pages/IServices";


function App() {
  return (
  <>
 <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/codeconduct" element={<Codeconduct/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/ohspolicy" element={<OHSPolicy/>}/>
        <Route path="/electricalinstallation" element={<ElectricalInstallation/>}/>
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/test" element={<Test/>}/>

        <Route path="/renewablepower" element={<RPP/>}/>
        <Route path="/Instrumentationservices" element={<IServices/>}/>
        <Route path="/projectmanagement" element={<ProjectManagement/>}/>
        <Route path="/civilservice" element={<CivilService/>}/>
        <Route path="/feeddetailengineering" element={<FeedDetailEngineering/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
