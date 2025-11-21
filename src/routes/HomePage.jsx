import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import CoursesPreview from "../components/HomePage/CoursesPreview";
import FacultyGallery from "../components/HomePage/FacultyGallery";
import Cta from "../components/HomePage/Cta";
import "./HomePage.css";
import News from "../components/HomePage/News";
import Gallery from "../components/HomePage/Gallery";
import Numberical from "../components/HomePage/Numerical";
const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <CoursesPreview />
      <FacultyGallery />
      <Gallery />
      <Numberical></Numberical>
      <Cta />
    </div>
  );
};

export default HomePage;
