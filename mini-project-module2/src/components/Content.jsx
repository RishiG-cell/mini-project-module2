import FoodCard from "./FoodCard";

const Content = ({ recipes, deleteRecipe }) => {
  return (
    <section id="contentsbox">
      {recipes.map((oneRecipe) => {
        return (
          <FoodCard
            oneRecipe={oneRecipe}
            deleteRecipe={deleteRecipe}
            key={oneRecipe.id}
          />
        );
      })}
    </section>
  );
};

export default Content;
