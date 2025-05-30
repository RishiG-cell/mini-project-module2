import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="add-recipe">Add your recipe ! </Link>
    </section>
  );
};

export default Sidebar;
