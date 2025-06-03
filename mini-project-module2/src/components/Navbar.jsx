import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Recipe Book</h1>
      </Link>
      <img />
    </nav>
  );
};

export default Navbar;
