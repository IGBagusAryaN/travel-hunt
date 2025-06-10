import { Link, useParams } from "react-router";
import { useRecommendationStore } from "../../../services/recommendations.service/recommendations.service";
import { useEffect, useState } from "react";
import Loading from "../../lottie/loading";

export const TableDetail = () => {
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
    <div className="px-4 md:px-8">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading size="10%" />
        </div>
      ) : (
        <div className="pt-28">
          <div className="relative overflow-x-auto rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <caption className="p-4 bg-white text-xl md:text-2xl font-semibold text-gray-900">
                <div className="text-start">
                  <div>
                    <div>Recommendation Detail results for {city}</div>
                    <p className="mt-1 text-sm text-gray-500">
                      Detailed Recommendations of Tourist Attractions in {city} Based on Criteria Score Calculation 🎯
                    </p>
                  </div>
                </div>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 md:px-6 py-3">Best Rated</th>
                  <th className="px-4 md:px-6 py-3">Tourist Attraction</th>
                  <th className="px-4 md:px-6 py-3">Facilities</th>
                  <th className="px-4 md:px-6 py-3">Price</th>
                  <th className="px-4 md:px-6 py-3">Distance</th>
                  <th className="px-4 md:px-6 py-3">Parking</th>
                  <th className="px-4 md:px-6 py-3">View</th>
                  <th className="px-4 md:px-6 py-3">Activities</th>
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
                      <Link to={"/detail-destinations"}>
                        {place.name}
                      </Link>
                    </td>
                    {place.place_scores.map((scoreObj) => (
                      <td
                        key={scoreObj.criteriasId}
                        className="px-4 md:px-6 py-4"
                      >
                        {scoreObj.score}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center md:justify-end my-10">
            <Link to="/cities" className="w-full md:w-auto">
              <div className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:text-[#4B83FE] text-sm md:text-base">
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
