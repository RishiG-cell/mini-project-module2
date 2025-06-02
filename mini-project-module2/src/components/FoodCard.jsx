import { Link } from "react-router-dom";

const FoodCard = ({ oneRecipe, deleteRecipe }) => {
  return (
    <div className="articles">
      <div className="closeBtn" onClick={() => deleteRecipe(oneRecipe.id)}>
        ❌
      </div>
      <h1>{oneRecipe.name}</h1>
      <img src={oneRecipe.image} alt={oneRecipe.name} />
      <p className="infobox">
        Calories: {oneRecipe.calories} <br />
        Servings: {oneRecipe.servings}
      </p>
      <Link to={`/edit-recipe/${oneRecipe.id}`}>✏️ Edit</Link>
    </div>
  );
};

export default FoodCard;
