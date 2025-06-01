import { Link, useParams } from "react-router";
import { Navbar } from "../navbar/navbar";
import { useRecommendationStore } from "../../../services/recommendations.service/recommendations.service";
import { useEffect, useState } from "react";
import Loading from "../../lottie/loading";

export const Table = () => {
  const {city} = useParams();
  const {data} = useRecommendationStore();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false)
    }, 3000);

    return () =>clearTimeout(timeOut)
  })
  return (
    <div className="">
      {isLoading ? (
        <div className="flex justify-center w-full items-center h-[100vh]" >
        <Loading size="10%"/>
      </div>
      ) : (
        <div>
        <div className="relative overflow-x-auto pt-32 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 " >
          <caption>
              <div className="flex justify-between items-end py-5 px-2 text-[24px] font-semibold text-left rtl:text-right text-gray-900 bg-white">
                <div>
                <div>Recommendation results for {city} </div>
                <p className="mt-1 text-sm font-normal text-gray-500 ">
                  Here’s the perfect travel recommendation for you. Make your
                  choices quickly and easily! 🎯
                </p>
                </div>
                <Link to={`/table-detail/${city}`} className="text-[16px] font-normal bg-[#4B83FE] text-white px-4 py-2 rounded-lg">
                  Detail results
                </Link>
              </div>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Best Rated
              </th>
              <th scope="col" className="px-6 py-3 w-[60%]">
                Tourist Attraction
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Action
              </th> */}
            </tr>
          </thead>
          <tbody>
          {data.map((place, index) => (
            <tr className="bg-white border-b  border-gray-200" key={place.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {index + 1}
              </th>
                <td className="px-6 py-4 hover:text-[#4B83FE]">
                  {place.name}
                </td>
              <td className="px-6 py-4">
                <div className="text-xs  font-medium">
                  {place.category}
                </div>
              </td>
              <td className="px-6 py-4">{place.totalScore}</td>
              {/* <Link to={"/detail-destinations"} className="py-2 ml-4">
                <td className="px-5 py-2 bg-[#4B83FE] text-white rounded-sm ">
                    Visit
                </td>
              </Link> */}
            </tr>
         
        ))}
          </tbody>
     
        </table>
      </div>
      <div className="flex justify-end">
        <Link to={"/cities"} className="w-[17%]">
          <div className="flex items-center gap-2 my-20  hover:text-[#4B83FE]   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
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
