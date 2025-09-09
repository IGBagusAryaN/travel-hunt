// import animationData from 'public/assets/animation1.json';
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch("/assets/animation6.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Gagal load animasi:", err));
  }, []);
  return (
    <div className="">
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Hero;
