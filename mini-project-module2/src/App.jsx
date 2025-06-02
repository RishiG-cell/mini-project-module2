import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecipeData from "./assets/recipes.json";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";
import AddRecipe from "./components/AddRecipe";
import EditRecipe from "./components/EditRecipe"; // <- importação nova
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toast";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const wave = () =>
    toast("👨🏼‍🍳Thats sounds amazing! , lets try this recipe chef👨🏼‍🍳 ");
  function handleDelete(recipesId) {
    console.log("Deleted");
    const filteredArr = recipes.filter((oneRecipe) => {
      return oneRecipe.id !== recipesId;
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
            element={<Homepage recipes={recipes} deleteRecipe={handleDelete} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/recipe-details/:recipeId" element={<RecipeDetails />} />
          <Route
            path="/add-recipe"
            element={
              <AddRecipe
                recipes={recipes}
                setRecipes={setRecipes}
                wave={wave}
                toast={toast}
                ToastContainer={ToastContainer}
              />
            }
          />
          <Route
            path="/edit-recipe/:recipeId"
            element={<EditRecipe recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
