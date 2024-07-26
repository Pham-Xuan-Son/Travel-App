import useScreenResize from "../hook/useScreenResize";
import Tour from "../tours";
import FeatureTours from "./FeatureTours";
import ImageSlider from "./ImageSlider";
import IntroductionImage from "./IntroductionImage";
import MotoBikeTours from "./MotobikeTours";

export default function HomePage() {
  const isMobile = useScreenResize();

  return (
    <div style={{ overflowY: "hidden", overflowX: "hidden" }}>
      <ImageSlider />
      <FeatureTours />
      <MotoBikeTours />
      <IntroductionImage />
      {isMobile && <Tour />}
    </div>
  );
}
