import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import MobileFallback from "./MobileFallback";

const SplineViewer = () => {
  const [isMobile, setIsMobile] = useState(false);

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
    <div
      className="cursor-pointer h-screen w-full"
      style={{ transform: "scale(0.8)" }}
    >
      <Spline scene="https://prod.spline.design/d0RmYWK3mLXocDR1/scene.splinecode" />
    </div>
  );
};

export default SplineViewer;
