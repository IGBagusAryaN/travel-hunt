import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="bg-[#4B83FE] text-white px-6 py-10 rounded-xl md:flex justify-between items-center">
        <div>
          <h2 className="text-[28px] font-bold">Contact us</h2>
          <p className="mt-2 text-sm max-w-md">
            We're here to help with any questions, suggestions, or feedback you
            have about choosing your ideal travel destination with our decision
            support system.
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="mb-5">
            <label className="mb-2 text-sm font-medium text-white flex items-center gap-1">
              Your email{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </label>

            <div className="flex items-center gap-2">
              <input
                type="email"
                id="email"
                className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
                placeholder="example@gmail.com"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-12"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-10 grid grid-cols-[1.5fr_1fr] gap-8 border-t border-gray-300 mt-10">
        <div>
          <Link to={"/"} className=" flex items-center ">
            <span className=" font-bold text-[24px]">travelHunt</span>
            <img
              src="/assets/logo-black.png"
              alt=""
              className=" w-[30px] h-[33px]"
            />
          </Link>
          <p className="text-sm mt-2">Smart Choices, Great Journeys!</p>
        </div>
        <div className="flex gap-10">
          <div>
            <h4 className="font-semibold mb-2">Features</h4>
            <ul className="text-sm space-y-1">
              <li>Recommendation</li>
              <li>Comparison</li>
              <li>Tourism Criteria</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="text-sm space-y-1">
              <li>Contact</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="text-sm space-y-1">
              <li>Kebijakan Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-300">
        © 2025 SPK Destinasi Wisata. All rights reserved.
      </div>
    </footer>
  );
}
