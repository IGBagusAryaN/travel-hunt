import animationData from '../../assets/Animation - 1745047708120.json';
import Lottie from 'lottie-react';

interface LoadingProps {
  size: string
}

const Loading = ({size}: LoadingProps) => {
  return (
    <div className={`w-[${size}] mt-[30px]`}>
      <Lottie animationData={animationData} loop={true} size={5} />
    </div>
  );
};

export default Loading;
