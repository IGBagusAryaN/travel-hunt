// import animationData from '../../assets/Animation - 1745141198455 (1).json';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('/assets/animation2.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Gagal load animasi:', err));
  }, []);

const Hero2 = () => {
  return (
    <div className=''>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Hero2;
