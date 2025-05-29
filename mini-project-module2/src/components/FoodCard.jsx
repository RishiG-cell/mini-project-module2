const FoodCard = ({ oneRecipe, deleteRecipe }) => {
  return (
    <div className="articles">
      <div
        className="closeBtn"
        onClick={() => {
          deleteRecipe(oneRecipe.id);
        }}
      >
        ❌
      </div>
      <h1>{oneRecipe.name}</h1>
      <img src={oneRecipe.image} />
      <p className="infobox">
        Calories: {oneRecipe.calories} <br />
        Servings: {oneRecipe.servings}
      </p>
    </div>
  );
};

export default FoodCard;
