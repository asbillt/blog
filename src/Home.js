// Import BlogList component.
// Import custom hook, useFetch.
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// Create a stateless functional component, Home.
const Home = () => {
  const {
    // Use array destructuring to pull the state variables that are
    // returned from the useFetch hook: data, isPending, and error.
    // Rename data as blogs in the Home component.
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
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
        // If blogs contains data, then call the BlogList component.
        // Pass the data in blogs as a property, blogs, to the BlogList component.
        // Pass "All Blogs!" string as a property, title, to the BlogList component.
        // If blogs is null, then do not call the BlogList component.
        // Passing null into the BlogList component will cause an error in the map() method.
        blogs && <BlogList blogs={blogs} title="All Blogs!" />
      }
    </div>
  );
};

// Export the Home component in order to import it into App.js.
export default Home;
