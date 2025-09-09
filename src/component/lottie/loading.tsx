import { useEffect, useState } from 'react';
// import animationData from '../../assets/Animation - 1745047708120.json';
import Lottie from 'lottie-react';

// interface LoadingProps {
//   size: string
// }

const Loading = () => {
    const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('/assets/animation5.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Gagal load animasi:', err));
  }, []);
  return (
    <div className={`w-[200px] mt-[30px]`}>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Loading;
