import { Link, useNavigate, useParams } from "react-router";
import Plane from "../../lottie/plane";
import DropdownGrid from "./dropdown";
import { Calculations } from "../../../services/calculation-service/calculation-service";
import { useRecommendationStore } from "../../../services/recommendations.service/recommendations.service";

export const Calculation = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const {setData} = useRecommendationStore();

  const handleSubmitWeights = async (weights: Record<string, number>) => {
    if (!city) return;
    try {
      const response = await Calculations(city, weights);
      navigate(`/table/${city}`, {
        state: {
          recommendations: response.data.recommendations,
        },
      });
      console.log('rec', response.data.recommendations)
      
      setData(response.data.recommendations)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="">
      <div className="pt-28 px-4 md:px-0">
        <div className="flex justify-center">
          <Plane />
        </div>
        <DropdownGrid onSubmit={handleSubmitWeights} />
        <Link
          to={"/table"}
          className=""
          //   disabled={isLoading}
          type="submit"
        ></Link>
      </div>
    </div>
  );
};
