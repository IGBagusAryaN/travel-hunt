import Hero2 from "../../lottie/hero2";

export const About = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
 
        <div className="order-1 md:order-none">
          <Hero2 />
        </div>

        <div className="order-2 md:order-none">
          <h1 className="text-[30px] sm:text-[36px] md:text-[44px] font-bold text-[#4B83FE] leading-tight">
            Who we are?
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            Tourist Destination Decision Support System is a web application
            that helps users choose the best tourist destination based on
            criteria such as distance, cost, facilities, and attractiveness.
            Using specific calculation methods, this app provides accurate
            recommendations tailored to the user's needs.
          </p>
        </div>
      </div>
    </div>
  );
};
