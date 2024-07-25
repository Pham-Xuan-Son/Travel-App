import FeatureTours from "./FeatureTours";
import ImageSlider from "./ImageSlider";
import IntroductionImage from "./IntroductionImage";
import MotoBikeTours from "./MotobikeTours";

export default function HomePage() {
  return (
    <div style={{overflowY: "hidden", overflowX: "hidden"}}>
      <ImageSlider />
      <FeatureTours />
      <MotoBikeTours />
      <IntroductionImage />
    </div>
  );
}
