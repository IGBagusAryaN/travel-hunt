import { Link } from "react-router";
import Hero from "../../lottie/hero";
import { PopularPlace } from "./popular-place";
import { motion } from "framer-motion";
import { About } from "./about";
import Footer from "./footer";

export const Home = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto">
      {/* Background */}
      {/* <div
        className="absolute -left-[650px] -z-10 bg-cover bg-left bg-no-repeat w-full  !px-0 !mx-0 hidden lg:block"
        style={{ backgroundImage: "url('/assets/background.png')" }}
      /> */}

      {/* Hero Section */}
      <section className="pt-28 lg:pt-36 lg:pb-24 px-4 md:px-6 z-40">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text */}
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <h1 className="text-[30px] md:text-[44px] font-bold leading-snug md:leading-tight">
              Leave Your{" "}
              <span className="text-[#4B83FE]">Mark in New Places</span> with Us
              ✈️
            </h1>

            <p className="text-base md:text-lg text-gray-600 py-4 mb-6">
              Explore dream destinations and create timeless memories with the
              best decision.
            </p>

            <motion.div
              whileHover={{
                y: -5,
                opacity: 0.9,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ y: 2, opacity: 1 }}
              className="inline-block"
            >
              <Link
                to="/cities"
                className="bg-[#4B83FE] hover:bg-[#3b6fdb] transition-colors duration-200 text-white font-semibold py-3 px-6 rounded-xl shadow-md"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          <Hero />
          {/* Hero Lottie dengan zoom in/out fleksibel */}
          {/* <motion.div
            className="flex justify-center items-center w-full lg:w-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
          </motion.div> */}
        </div>
      </section>

      {/* Sections */}
      <PopularPlace />
      <About />
      <Footer />
    </div>
  );
};
