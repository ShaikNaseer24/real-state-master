import "./App.css";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./Register";
import Contact from "./Contact";
import Navbar from "./Nav1";
import Login from "./Login";
import Properties from "./Properties";
import Footer from "./Footer-1";
import About from "./About";
import Header from "./Header";
import Forgot from "./Forgot";
import PropertyListing from "./PropertyListing";
import Forgotnewpassword from "./Forgotnewpassword";
// import RentPage from "./Rent";
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        {/* <Header></Header> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Properties" element={<Properties />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/PropertyListing" element={<PropertyListing />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Forgotnewpassword" element={<Forgotnewpassword />} />
          {/* <Route path="/RentPage" element={<RentPage />} /> */}
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
