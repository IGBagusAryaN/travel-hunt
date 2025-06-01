// import animationData from '../../assets/Animation - 1744820750440.json';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const Plane = () => {
    const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('/assets/Animation - 1744820750440.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Gagal load animasi:', err));
  }, []);
  return (
    <div className=''>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Plane;
