import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import People from "../../lottie/people";
import toast from "react-hot-toast";
import { fetchLogin } from "../../../services/auth-service/auth.service";
import Cookies from "js-cookie";
import { useAuthStore } from "../../../store/auth-store";
import image from "/assets/image.png";
import logo from "/assets/logo.png";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;
export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1024) {
      toast.error("Login is only available on desktop devices");
      return;
    }

    setIsLoading(true);

    toast
      .promise(
        fetchLogin(data).then((res) => {
          if (res.status === 200) {
            const data = res.data;
            setUser(data.user);
            Cookies.set("token", data.token);
            navigate("/");
            return data.message;
          }
        }),
        {
          loading: "Please wait, logging in...",
          success: (message) => <div>{message}</div>,
          error: (error) => error.message,
        },
        {
          success: {
            style: {
              background: "#ffffff",
              color: "#1d1d1d",
            },
          },
          error: {
            style: {
              background: "#ffffff",
              color: "#1d1d1d",
            },
          },
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_3fr]">
        <div className="relative h-[100vh] hidden lg:block">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-5 left-5 flex items-center">
            <span className="text-white font-bold text-[20px]">travelHunt</span>
            <img src={logo} alt="" className=" w-[30px] h-[30px]" />
          </div>
          <People />
          <div className="absolute top-127 left-23">
            <div className="text-white font-bold text-[34px] ">
              Find your travel vibe
            </div>
          </div>
          <p className="text-white text-center text-[16px]  absolute top-143 left-26 max-w-[290px]">
            {" "}
            Let the journey guide you to places your heart has always dreamed
            about exploring...
          </p>
        </div>
        <div className="flex justify-center px-4 sm:px-6 md:px-10">
          <div className="pt-32 w-full sm:w-[80%] md:w-[60%] lg:w-[40%]">
            <div className="font-semibold text-[48px]">Login</div>
            <div className="ml-[1px] font-light mt-2">
              Welcome back, please login to your account!
            </div>
            <form
              action=""
              className="mt-10 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#4B83FE] peer"
                  placeholder=" "
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-red-400 text-sm mt-2">
                    {errors.email.message}
                  </div>
                )}
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#4B83FE] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#4B83FE] peer"
                  placeholder=" "
                  {...register("password")}
                />
                {errors.password && (
                  <div className="text-red-400 text-sm mt-2">
                    {errors.password.message}
                  </div>
                )}
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Password
                </label>
              </div>
              <div className="w-full text-center my-4">
                <button
                  className="border border-gray-200 bg-[#4B83FE] w-full p-3 text-white font-bold rounded-sm"
                  type="submit"
                  disabled={isLoading}
                >
                  Login
                </button>
              </div>
            </form>
            <span>
              You dont have account?
              <Link
                to={"/sign-up"}
                className="ml-1 text-[#4B83FE] hover:text-[#4b84fea9]"
              >
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
