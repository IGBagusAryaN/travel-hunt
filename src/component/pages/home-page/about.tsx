import Hero2 from "../../lottie/hero2";

export const About = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-2 pt-12 pb-32">
          <Hero2 />
          <div>
            <div className="col-span-12 lg:col-span-4 py-4 lg:pt-12 order-2 lg:order-1 pl-10">
              <h1 className="text-[37px] md:text-[47px] font-bold leading-tight md:leading-tight my-0  text-[#4B83FE]">
                Who we are?
              </h1>
              <div className="text-md ml-[2px] opacity-75 py-4 mb-5">
                Tourist Destination Decision Support System is an web
                application that helps users choose the best tourist destination
                based on criteria such as distance, cost, facilities, and
                attractiveness. Using specific calculation methods, this app
                provides accurate recommendations tailored to the user's needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
