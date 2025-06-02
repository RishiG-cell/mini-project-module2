import { useState } from "react";

const AddRecipe = ({ recipes, setRecipes }) => {
  const [name, SetName] = useState("");
  const [image, SetImage] = useState("");
  const [calories, SetCalories] = useState(0);
  const [servings, SetServings] = useState(1);

  function handleNewRecipe(event) {
    event.preventDefault();
    const toAddRecipe = {
      id: crypto.randomUUID(),
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };

    setRecipes([...recipes, toAddRecipe]);

    SetName("");
    SetImage("");
    SetCalories(0);
    SetServings(1);
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

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddRecipe;
