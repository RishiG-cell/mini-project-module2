import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecipeData from "./assets/recipes.json";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddRecipe from "./components/AddRecipe";

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
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                recipes={recipes}
                deleteRecipe={handleDelete}
                RecipeData={RecipeData}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/recipe-details/:recipeId" element={<RecipeDetails />} />
          <Route
            path="/add-recipe"
            element={<AddRecipe recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
