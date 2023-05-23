import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeal from "./AvailableMeal";
const Meal = () => {
  return <Fragment>
    <MealsSummary />
    <AvailableMeal />
  </Fragment>;
};
export default Meal;
