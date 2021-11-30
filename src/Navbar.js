// Import Link from the react-router-dom library.
import { Link } from "react-router-dom";

// Create a stateless functional component, Navbar.
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

// Export the Navbar component in order to import it into App.js.
export default Navbar;
