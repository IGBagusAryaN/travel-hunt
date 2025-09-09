import { Link, useParams } from "react-router";
import { useRecommendationStore } from "../../../services/recommendations.service/recommendations.service";
import { useEffect, useState } from "react";
import Loading from "../../lottie/loading";

export const Table = () => {
  const { city } = useParams();
  const { data } = useRecommendationStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="px-4 lg:px-2 max-w-screen-xl mx-auto">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading/>
        </div>
      ) : (
        <div className="pt-28">
          <div className="relative overflow-x-auto rounded-lg ">
            <table className="w-full text-sm text-left text-gray-500">
              <caption className="p-4 bg-white text-left text-xl md:text-2xl font-semibold text-gray-900">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                  <div>
                    <div>Recommendation results for {city}</div>
                    <p className="mt-1 text-sm text-gray-500">
                      Here’s the perfect travel recommendation for you. Make your
                      choices quickly and easily! 🎯
                    </p>
                  </div>
                  <Link
                    to={`/table-detail/${city}`}
                    className="text-sm md:text-base bg-[#4B83FE] text-white px-4 py-2 rounded-lg"
                  >
                    Detail results
                  </Link>
                </div>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Best Rated
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3 w-[60%]">
                    Tourist Attraction
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-4 md:px-6 py-3">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((place, index) => (
                  <tr
                    className="bg-white border-b border-gray-200"
                    key={place.id}
                  >
                    <th
                      scope="row"
                      className="px-4 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {index + 1}
                    </th>
                    <td className="px-4 md:px-6 py-4 hover:text-[#4B83FE]">
                      {place.name}
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="text-xs font-medium">{place.category}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4">{place.totalScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center md:justify-end my-10">
            <Link to="/cities" className="w-full md:w-auto">
              <div className="flex items-center justify-center gap-2 py-3 px-4 hover:text-[#4B83FE] border border-gray-300 rounded-lg text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                Find other destinations
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
