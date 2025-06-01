import animationData from '../../assets/Animation - 1744711077673 (1).json';
import Lottie from 'lottie-react';

const People = () => {
  return (
    <div className='absolute w-[350px] h-[290px] top-37 left-24'>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default People;
