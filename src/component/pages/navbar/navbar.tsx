import { Link } from "react-router";
import { useAuthStore } from "../../../store/auth-store";
import { useEffect } from "react";
import image from "/assets/logo-black.png";

export const Navbar = () => {
  const { user } = useAuthStore();

  useEffect(() => {
    console.log("testtttttt", user?.name);
  }, [user]);

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-[85px]">
        <div className="flex justify-between items-center py-4">

          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl sm:text-2xl">travelHunt</span>
            <img src={image} alt="Logo" className="w-7 h-7 sm:w-8 sm:h-8" />
          </Link>

          <div className="flex items-center gap-2 text-sm sm:text-base">
            <span className="text-gray-700">Hi, {user?.name}🖐️</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};
