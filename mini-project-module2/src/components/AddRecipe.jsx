import { useState } from "react";

const AddRecipe = ({ recipes, setRecipes }) => {
  const [name, SetName] = useState("");
  const [image, SetImage] = useState("");
  const [calories, SetCalories] = useState(0);

  function handleNewRecipe(event) {
    event.preventDefault();
    const toAddRecipe = {
      name,
      image,
      calories,
    };
    console.log(recipes);
    setRecipes([...recipes, toAddRecipe]);

    SetName("");
    SetImage("");
    SetCalories(0);
  }

  return (
    <div id="form-new-recipe">
      <h1>Add Recipe</h1>;
      <form onSubmit={handleNewRecipe}>
        <label>Name of the dish: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => SetName(event.target.value)}
        />

        <label>Picture: </label>
        <input
          type="text"
          image="image"
          value={image}
          onChange={(event) => SetImage(event.target.value)}
        />

        <label>Calories: </label>
        <input
          type="number"
          calories="calories"
          value={calories}
          onChange={(event) => SetCalories(event.target.value)}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddRecipe;
