import { useEffect, useState } from 'react';
// import animationData from '../../assets/Animation - 1745036143614 (1).json';
import Lottie from 'lottie-react';

const Search = () => {
    const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch('/assets/Animation - 1745036143614 (1).json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Gagal load animasi:', err));
  }, []);
  return (
    <div className='w-[30%]'>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Search;
