import animationData from '../../assets/Animation - 1744820750440.json';
import Lottie from 'lottie-react';

const Plane = () => {
  return (
    <div className=''>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Plane;
