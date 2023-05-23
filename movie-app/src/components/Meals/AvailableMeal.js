import { useState,useEffect } from "react";
import classes from "./AvailableMeal.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeal = () => {

  const [meals,setMeals] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [httpError,setHttpError] = useState();

  useEffect(()=>{
      const fetchMeals = async () => {
        try{
          const response = await fetch('https://food-http-73ca2-default-rtdb.firebaseio.com/')
        if(!response.ok) {
          throw new Error('Something went wrong .. status' + ' '+ response.status)
        }
        const responseData = await response.json();
        const loadedMeals = [];
      for ( const key in responseData)
      {
        loadedMeals.push({
          id: key,
          name:responseData[key].name,
          description:responseData[key].description,
          price: responseData[key].price
        })
      }
      setMeals(loadedMeals)
      setIsLoading(false);
        }
        catch(e) {
          setHttpError(e.message)
        }
      }
      fetchMeals();
  },[]);

  if(httpError){
    return (
      <section className={classes.mealError} >
        <h2>{httpError}</h2>
      </section>
    )
  }

  if(isLoading) {
    return (
      <section className={classes.mealLoading} >
        <p>Loading....</p>
      </section>
    )
  }

  const mealLists =  meals.map((meal) => 
  <Card >
    <MealItem
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  </Card>
  )

  

  console.log('Availabel Running...')
  return (
    <>
    <section className={classes.meals}>
      <ul>
        {mealLists}
      </ul>
    </section>
    </>
  );
};

export default AvailableMeal;
