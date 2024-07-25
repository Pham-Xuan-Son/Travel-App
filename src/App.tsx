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
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/home/ImageSlider" element={<ImageSlider />} />
        <Route path="/home/FeatureTours" element={<FeatureTours />} />
        <Route path="/home/MotobikeTours" element={<MotoBikeTours />} />
        <Route path="/home/IntroductionImage" element={<IntroductionImage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
