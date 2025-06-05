import { use, useState } from "react";
import { Navigate } from "react-router-dom";

const AddRecipe = ({ recipes, setRecipes, ToastContainer, wave }) => {
  const [name, SetName] = useState("");
  const [image, SetImage] = useState("");
  const [calories, SetCalories] = useState(0);
  const [servings, SetServings] = useState(1);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  function handleNewRecipe(event) {
    event.preventDefault();
    const toAddRecipe = {
      id: crypto.randomUUID(),
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
      ingredients,
      steps,
    };

    setRecipes([...recipes, toAddRecipe]);

    SetName("");
    SetImage("");
    SetCalories(0);
    SetServings(1);
    setIngredients([]);
    setSteps([]);
  }

  return (
    <div id="form-new-recipe">
      <h1>Add Recipe</h1>
      <form onSubmit={handleNewRecipe}>
        <label>Name of the dish:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => SetName(e.target.value)}
        />

        <label>Picture:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => SetImage(e.target.value)}
        />

        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => SetCalories(e.target.value)}
        />

        <label>Servings:</label>
        <input
          type="number"
          value={servings}
          onChange={(e) => SetServings(e.target.value)}
        />

        <label>Ingredients:</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />

        <label>Steps:</label>
        <input
          type="text"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <button onClick={wave}>Submit</button>
        <div>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
