import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Cupcakes Delivered To You! </h2>
      <p>
        Choose Your Favourite Cupcake from our broad selection of available
        flavours and enjoy!
      </p>
      <p>
        All our products are made with high-quality ingredients, just-in-time
        and of course by the best bakers in the world!
      </p>
    </section>
  );
};

export default MealsSummary;