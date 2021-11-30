// Import Link from the react-router-dom library.
import { Link } from "react-router-dom";
// Import ninja icon from react-icons library.
import { GiRunningNinja } from "react-icons/gi";

// Create NotFound component, 404 Page Not Found.
const NotFound = () => {
  return (
    <div className="not-found">
      <h6 className="not-found-header">404</h6>
      <p className="not-found-inner">Page Not Found</p>
      <Link
        // Redirect users to the home page.
        to="/"
        className="not-found-return"
      >
        Back to home <GiRunningNinja />
      </Link>
    </div>
  );
};

// Export the NotFound component in order to import it into App.js.
export default NotFound;
