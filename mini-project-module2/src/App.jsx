import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecipeData from "./assets/recipes.json";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  function handleDelete(recipesId) {
    console.log("Deleted");
    const filteredArr = recipes.filter((oneRecipe) => {
      if (oneRecipe.id !== recipesId) {
        return true;
      } else {
        return false;
      }
    });
    setRecipes(filteredArr);
  }
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <Content recipes={recipes} deleteRecipe={handleDelete} />
      </main>

      <Footer />
    </>
  );
}

export default App;
