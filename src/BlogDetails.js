// Import useParams and useHistory hooks from the react-router-dom library.
import { useParams, useHistory } from "react-router-dom";
// Import custom hook, useFetch.
import useFetch from "./useFetch";

const BlogDetails = () => {
  // Grab route parameters from the useParams hook
  // and destructure the route parameter, id.
  const { id } = useParams();
  // Use array destructuring to pull the state variables that are
  // returned from the useFetch hook: data, isPending, and error.
  // Rename data as blog in the BlogDetails component.
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  // Create the history object.
  const history = useHistory();

  // Create the handleClick function
  const handleClick = () => {
    // Make a DELETE request to the blog with the corresponding blog id.
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      // Use history object to redirect the app to the Home page
      // when the DELETE request is completed.
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {
        // Use the Logical && to check the below constants. If a constant on the left is false, then the code on the right is never run.
        // If error has a state of error, then output the error to the browser.
        error && <div>{error}</div>
      }
      {
        // If isPending is true, then return "Loading..." to the App.
        // If isPending is false, then do not return "Loading..." to the App.
        isPending && <div>Loading...</div>
      }
      {
        // If blog contains data, then render the <article> with nested elements.
        // If blogs is null, then do not render the <article> with nested elements.
        blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <button
              // When the button is clicked call the handleClick function.
              onClick={handleClick}
            >
              Delete
            </button>
          </article>
        )
      }
    </div>
  );
};

// Export BlogDetails component in order to import it into App.js.
export default BlogDetails;
