import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./routes/AboutUs";
import ContactUs from "./routes/ContactUs";
import Courses from "./routes/Courses";
import GalleryPage from "./routes/GalleryPage";
import HomePage from "./routes/HomePage";
import Faculty from "./routes/Faculty";
import Join from "./routes/Join";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
