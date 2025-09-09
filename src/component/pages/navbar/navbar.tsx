import { Link } from "react-router";
import { useAuthStore } from "../../../store/auth-store";
import { useEffect, useRef, useState } from "react";
import image from "/assets/logo-black.png";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
let isConfirmOpen = false; // state global sederhana


const showConfirm = (message: string, onConfirm: () => void) => {
  if (isConfirmOpen) return;
  isConfirmOpen = true;

  const toastId = "logout-confirm";

  toast.custom(
    (t) => (
      <AnimatePresence
        onExitComplete={() => {
          isConfirmOpen = false; // reset setelah animasi keluar selesai
        }}
      >
        {t.visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col gap-2 w-72 border border-gray-200"
          >
            <p className="text-gray-800 text-sm">{message}</p>
            <div className="flex justify-end gap-2">
              <button
                className="px-3 py-1 text-sm bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200"
                onClick={() => toast.dismiss(toastId)}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 text-sm bg-red-400 text-white rounded-md cursor-pointer hover:bg-red-500"
                onClick={() => {
                  onConfirm();
                  toast.dismiss(toastId);
                }}
              >
                Yes
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    ),
    {
      id: toastId,
      duration: Infinity,
      position: "top-center",
    }
  );
};

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 pt-3 transition-all duration-300 bg-white`}
    >
      <div className="max-w-screen-xl mx-auto px-6 ">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2 ">
            <span className="font-bold text-xl sm:text-2xl">travelHunt</span>
            <img src={image} alt="Logo" className="w-7 h-7 sm:w-8 sm:h-8" />
          </Link>

          <div
            className="relative flex items-center gap-2 text-sm sm:text-base"
            ref={dropdownRef}
          >
            <span className="text-gray-700">Hi, {user?.name}🖐️</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg border border-gray-200 p-2 z-50"
                >
                  <div className="flex items-center border-b border-b-gray-200 pb-1">
                    <p className="px-3 py-2 text-sm text-gray-600 ">
                      {user?.email}
                    </p>
                  </div>
                  <button
                    className="w-full mt-1 cursor-pointer text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                    onClick={() =>
                      showConfirm("Are you sure you want to log out?", () => {
                        logout();
                      })
                    }
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
};
