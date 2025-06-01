import animationData from '../../assets/Animation - 1744776543153 (1).json';
import Lottie from 'lottie-react';

const Hero = () => {
  return (
    <div className=''>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Hero;
