import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/card';

const DUMMY_MEALS = [
  {
    id: 'c1',
    name: 'Oreo Cupcake',
    description: 'An ideal treat for Oreo fans!',
    price: 55.20,
  },
  {
    id: 'c2',
    name: 'Red Velvet Cupcake',
    description: 'Super tasty red velvet delight that is going to be your new favourite.',
    price: 65.5,
  },
  {
    id: 'c3',
    name: 'Ferrero Rocher Cupcake',
    description: 'Chocolate Cupcake topped with nutty rocher and chocolate mousse!',
    price: 74.99,
  },
  {
    id: 'c4',
    name: 'Devilish Choco Cupcake',
    description: 'Chocolate Cupcake topped with a extra choclatey choclate ganache.',
    price: 60.35,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ));
  return (
    <section className={classes.meals}>
      <Card>
       {mealsList}
      </Card>  
    </section>
  );
};

export default AvailableMeals;
