// import animationData from '../../assets/Animation - 1744711077673 (1).json';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const People = () => {
    const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('/assets/animation4.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Gagal load animasi:', err));
  }, []);
  return (
    <div className='absolute w-[350px] h-[290px] top-37 left-24'>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default People;
