// Import Link from the react-router-dom library.
import { Link } from "react-router-dom";

// Create the BlogList component.
// Using array destructuring, pull the properties, blogs and title,
// from the props object, to be accessed in the BlogList component.
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {
        // Map (loop) through the blogs parameter.
        // Each loop, pass a blog, as a parameter, into the arrow function.
        blogs.map((blog) => (
          <div
            className="blog-preview"
            // Each loop, create a key, per blog, equal to the id of that blog.
            key={blog.id}
          >
            <Link
              // Create a link to the blog with the corresponding id.
              to={`/blogs/${blog.id}`}
            >
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))
      }
    </div>
  );
};

// Export the BlogList component in order to import it into Home.js.
export default BlogList;
