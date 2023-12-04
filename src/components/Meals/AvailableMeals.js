import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <li className={classes["meals__li"]}>
      <span className={classes.name}>
        {meal.name}
      </span>
      <span className={classes.desc}>
        <i>{meal.description}</i>
      </span>
      <span className={classes.price}>
        ${meal.price}
      </span>
      <hr />
    </li>
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default AvailableMeals;
