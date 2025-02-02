import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import MobileFallback from "./MobileFallback";
import Spinner from "./Spinner";

const SplineViewer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 700);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <MobileFallback />;
  }

  return (
    <>
      {isLoading && <Spinner />}
      <div
        className={`cursor-pointer h-screen w-full scale-90 md:scale-90 ${
          isLoading ? "hidden" : "block"
        }`}
      >
        <Spline
          scene="https://prod.spline.design/9T4QNtTDdCttd70D/scene.splinecode"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  );
};

export default SplineViewer;
