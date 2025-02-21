import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sections from "./components/Sections/Sections";
import Footer from "./components/Footer/Footer";
import Burgers from "./pages/Burgers/Burgers";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Sections />} />
        <Route path="/burgers" element={<Burgers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
