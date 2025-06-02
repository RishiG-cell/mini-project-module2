import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipe = ({ recipes, setRecipes }) => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const existingRecipe = recipes.find((r) => r.id === recipeId);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  useEffect(() => {
    if (existingRecipe) {
      setName(existingRecipe.name);
      setImage(existingRecipe.image);
      setCalories(existingRecipe.calories);
      setServings(existingRecipe.servings);
    }
  }, [existingRecipe]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      id: recipeId,
      name,
      image,
      calories: Number(calories),
      servings: Number(servings),
    };

    const updatedList = recipes.map((r) =>
      r.id === recipeId ? updatedRecipe : r
    );
    setRecipes(updatedList);
    navigate("/");
  };

  return (
    <div id="form-new-recipe">
      <h1>Edit Recipe</h1>
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Image:</label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />

        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <label>Servings:</label>
        <input
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />

        <button>Update</button>
      </form>
    </div>
  );
};

export default EditRecipe;
