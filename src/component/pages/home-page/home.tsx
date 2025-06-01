import { Link } from "react-router";
import Hero from "../../lottie/hero";
import { PopularPlace } from "./popular-place";
import { motion } from "framer-motion";
import { About } from "./about";
import Footer from "./footer";

export const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 pt-48">
        <div>
          <div className="col-span-12 lg:col-span-4 py-4 lg:pt-12 order-2 lg:order-1 px-2">
            <h1 className="text-[37px] md:text-[47px] font-bold leading-tight md:leading-tight my-0">
              Leave Your{" "}
              <span className="text-[#4B83FE]">Mark in New Places</span> with Us
              ✈️
            </h1>

            <div className="text-md ml-[2px] opacity-75 py-4 mb-5">
              Explore Dream Destinations and Create Timeless Memories with the
              Best Decision
            </div>
            <motion.div
              whileHover={{
                y: -5,
                opacity: 0.8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ y: 2, opacity: 1 }}
              className="origin-center relative"
            >
              <Link
                to={"/cities"}
                className="bg-[#4B83FE] w-full md:w-44 py-4 px-8 text-white rounded-xl shadow-md"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
        <Hero />
      </div>
      <PopularPlace />
      <About/>
      <Footer/>
    </div>
  );
};
