import { Link } from "react-router";
import { useAuthStore } from "../../../store/auth-store";
import { useEffect } from "react";
import image from "/assets/logo-black.png";

export const Navbar = () => {
  const { user } = useAuthStore();

  useEffect(() => {
    console.log("testtttttt", user?.name);
  });

  return (
    <div>
      <div className="flex justify-between ml-2 fixed pt-10 pb-3 bg-white w-[75%] z-10">
        <Link to={"/"} className=" flex items-center">
          <span className=" font-bold text-[24px]">travelHunt</span>
          <img src={image} alt="" className=" w-[30px] h-[33px]" />
        </Link>
        <div className="flex items-center mr-2">
          <div className="text-[18px] text-gray-700">Hi, {user?.name}🖐️</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
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
  );
};
