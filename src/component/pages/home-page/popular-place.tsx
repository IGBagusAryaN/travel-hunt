import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import axios from "axios";

type Places = {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  categories: string[];
};

export const PopularPlace = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollX = useMotionValue(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [places, setPlaces] = useState<Places[]>([]);

  const colors = [
    { bg: "bg-sky-100", text: "text-sky-800" },
    { bg: "bg-teal-100", text: "text-teal-800" },
    { bg: "bg-blue-100", text: "text-blue-800" },
    { bg: "bg-indigo-100", text: "text-indigo-800" },
  ];

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get<Places[]>(
          "https://api.npoint.io/22e8cfecf9875bcb8e99"
        );
        setPlaces(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlaces();
  }, []);

  const handleArrowClick = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.querySelector(".card") as HTMLDivElement;
    if (!card) return;

    const scrollAmount =
      direction === "left" ? -card.offsetWidth : card.offsetWidth;
    const currentScroll = carouselRef.current.scrollLeft;
    const targetScroll = currentScroll + scrollAmount;

    animate(scrollX, targetScroll, {
      type: "spring",
      stiffness: 200,
      damping: 30,
    });
  };

  useEffect(() => {
    const unsubscribe = scrollX.on("change", (latest) => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = latest;
      }
    });

    return () => unsubscribe();
  }, [scrollX]);

  const handleDragStart = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleDragging = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.pageX - startX;
    carouselRef.current.scrollLeft = scrollLeft - x;
  };

  const handleDragStop = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative my-20 px-4 sm:px-6 lg:px-8">
      <div className="text-[24px] sm:text-[28px] font-bold mb-6 ml-2">
        Popular Place in the world
      </div>
      <div className="absolute left-2 sm:-left-6 top-1/2 z-10">
        <button
          onClick={() => handleArrowClick("left")}
          className="bg-white p-2 rounded-full shadow cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="absolute right-2 sm:-right-6 top-1/2 z-10">
        <button
          onClick={() => handleArrowClick("right")}
          className="bg-white p-2 rounded-full shadow cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto no-scrollbar px-1 sm:px-2"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragging}
        onMouseUp={handleDragStop}
        onMouseLeave={handleDragStop}
      >
        {places.map((place, index) => {
          const visibleCategories = place.categories.slice(0, 2);
          const hiddenCategories = place.categories.slice(0);
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="card w-[85vw] max-w-[270px] flex-shrink-0 rounded-2xl bg-white shadow p-3"
            >
              <img
                src={place.image}
                alt={place.name}
                loading="lazy"
                className="rounded-xl object-cover h-40 w-full"
              />
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {place.name}
                </h3>
                <h6 className="text-gray-500 text-xs">{place.location}</h6>
                <p className="text-sm text-gray-500 mt-1 line-clamp-4 text-justify">
                  {place.description}
                </p>

                <div className="flex items-center gap-2 mt-3 relative">
                  {visibleCategories.map((cat, index) => {
                    const color = colors[index % colors.length];
                    return (
                      <span
                        key={index}
                        className={`text-xs ${color.bg} ${color.text} px-2 py-1 rounded-md font-medium`}
                      >
                        {cat}
                      </span>
                    );
                  })}

                  {hiddenCategories.length > 2 && (
                    <div
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative"
                    >
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md font-medium cursor-pointer">
                        +{hiddenCategories.length - 2}
                      </span>
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 -top-24 bg-white rounded-lg shadow-md p-2 z-10 min-w-[160px]"
                          >
                            <div className="grid grid-cols-2 gap-2">
                              {hiddenCategories.map((cat, index) => {
                                const color = colors[index % colors.length];
                                return (
                                  <span
                                    key={index}
                                    className={`text-xs ${color.bg} ${color.text} px-2 py-1 rounded-md font-medium text-center`}
                                  >
                                    {cat}
                                  </span>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

<style></style>;
