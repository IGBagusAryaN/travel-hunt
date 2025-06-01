import animationData from '../../assets/Animation - 1745036143614 (1).json';
import Lottie from 'lottie-react';

const Search = () => {
  return (
    <div className='w-[30%]'>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Search;
