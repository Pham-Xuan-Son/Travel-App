import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./menu";
import ImageSlider from "./home/ImageSlider";
import FeatureTours from "./home/FeatureTours";
import MotoBikeTours from "./home/MotobikeTours";
import IntroductionImage from "./home/IntroductionImage";
import HomePage from "./home";

function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/Travel-App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/featuretours" element={<FeatureTours />} />
        <Route path="/motobiketours" element={<MotoBikeTours />} />
        <Route path="/introductionimage" element={<IntroductionImage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
