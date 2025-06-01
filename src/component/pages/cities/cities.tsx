import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../../lottie/search";
import Loading from "../../lottie/loading";

interface Cities {
  id: string;
  city: string;
  description: string;
  image_url: string;
  category: string;
}

export const Cities = () => {
  const [city, setCity] = useState<Cities[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/db6cc90a33fb548dc669"
        );

        setCity(response.data);
        console.log("data", response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();
  }, []);

  const filteredMapCity = city.filter((place) =>
    place.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="">
      <div className="flex justify-between items-end pt-36 ">
        <div>
          <div className="ml-2 text-[24px] font-semibold">
            Choose your destination city
          </div>
          <div className="ml-2 mt-2 max-w-[800px] text-gray-500">
            A different sky, a new atmosphere, and experiences you've never had
            before — it all begins with one simple decision: choosing your
            destination. Let’s explore the world, one city at a time
          </div>
        </div>

        <form className="w-[26%] mr-2">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none "
              placeholder="Search Mockups, Logos..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="grid grid-cols-4 mt-10 mb-20 gap-5 gap-y-10 mx-2  ">
        {isLoading ? (
          <div className="col-span-4 flex justify-center items-center ">
            <div className="flex justify-center">
              <Loading size="30%" />
            </div>
          </div>
        ) : error ? (
          <div>{error}</div>
        ) : filteredMapCity.length === 0 ? (
          <div className="text-gray-500 flex flex-col items-center justify-center col-span-4">
            <Search />
            <div className="mt-5">Kota yg anda cari tidak ada!</div>
          </div>
        ) : (
          filteredMapCity.map((cities, index) => (
            <Link
              to={`/calculation/${cities.city}`}
              className="max-w-sm overflow-hidden"
              key={index}
            >
              <div className="relative">
                <img
                  src={cities.image_url}
                  alt={cities.city}
                  className="rounded-2xl object-cover h-40 w-full"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {cities.city}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {cities.description}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
