import { useParams } from "react-router-dom";

const RecipeDetails = ({ recipes }) => {
  const { recipeId } = useParams();
  const recipeOne = recipes.find((aRecipe) => {
    if (aRecipe.id === recipeId) {
      return true;
    }
  });
  console.log("here", recipeOne);
  return (
    <>
      <div className="details-container">
        <h1>{recipeOne.name}</h1>
        <img src={recipeOne.image} alt={recipeOne.name} />
        <div className="info-details">
          <h3>Ingredients</h3>
          <ul>
            {recipeOne.ingredients.map((oneIn) => {
              return <li>{oneIn}</li>;
            })}
          </ul>
          <h3>Steps</h3>
          <ol>
            {recipeOne.steps.map((oneStep) => {
              return <li>{oneStep}</li>;
            })}
          </ol>
        </div>
        <h2>Calories :{recipeOne.calories}</h2>
        <h2>Servings :{recipeOne.servings}</h2>
      </div>
    </>
  );
};

export default RecipeDetails;
