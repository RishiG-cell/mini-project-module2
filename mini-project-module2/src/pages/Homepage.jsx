import Content from "../components/Content";

const Homepage = ({ recipes, deleteRecipe }) => {
  return <Content recipes={recipes} deleteRecipe={deleteRecipe} />;
};

export default Homepage;
