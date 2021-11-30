// Import useState hook from the react library.
import { useState } from "react";
// Import useHistory hook from the react-router-dom library.
// Use history object to go backward or forward in history of the app.
// Use history object to redirect the user.
import { useHistory } from "react-router-dom";

// Create functional component, Create.
const Create = () => {
  // Create state variable, title, with empty string as initial state.
  const [title, setTitle] = useState("");
  // Create state variable, body, with empty string as initial state.
  const [body, setBody] = useState("");
  // Create state variable, author, with "mario" as initial state.
  const [author, setAuthor] = useState("mario");
  // Create state variable, isPending, with false as initial state.
  const [isPending, setIsPending] = useState(false);
  // Create the history object.
  const history = useHistory();

  const handleSubmit = (e) => {
    // Prevent the page from refreshing when a user click the "Add Blog" button
    // by attaching preventDefault method to the event parameter, e.
    e.preventDefault();
    // Create an object called blog.
    const blog = { title, body, author };

    // Update the state of isPending to true.
    setIsPending(true);

    // Make a POST request to the "blogs" endpoint in the db.json file.
    // JSON Server will automatically add the id property.
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      // Tell the JSON server the type of content, json data, that is being sent to the server in the POST request.
      headers: { "Content-Type": "application/json" },
      // Turn the blog object into a JSON string.
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      // Update the state of isPending to false.
      setIsPending(false);
      // Use history object to redirect the app to the Home page.
      history.push("/");
    });
  };

  // Return a form with title, body, author, and a button.
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form
        // When a button is clicked inside a form, it will fire a submit event on the form itself.
        // The onSubmit attribute listens for the submit event and reacts by running the handleSubmit function.
        onSubmit={handleSubmit}
      >
        <label>Blog title:</label>
        <input
          type="text"
          required
          // The state of title will be the value inside the input area.
          // Whatever the state of title is, is what will be shown inside the input area.
          value={title}
          // When the value of the input changes, the onChange event is triggered;
          // The event object is passed into the anonymous function as the parameter, "e".
          // The anonymous function calls setTitle and passes the event's target value into it that
          // updates the state of "title".
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          // The state of body will be the value inside the textarea.
          // Whatever the state of body is, is what will be shown inside the textarea.
          value={body}
          // When the value of the textarea changes, the onChange event is triggered;
          // The event object is passed into the anonymous function as the parameter, "e".
          // The anonymous function calls setBody and passes the event's target value into it that
          // updates the state of "body".
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          // The value of the drop down will be the state of author.
          // Whatever the state of author is, is what will be shown inside the select area.
          value={author}
          // When the value of the dropdown changes, the onChange event is triggered;
          // The event object is passed into the anonymous function as the parameter, "e".
          // The anonymous function calls setAuthor and passes the event's target value into it that
          // updates the state of "author".
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {
          // When isPending is false, render the Add Blog button.
          !isPending && <button>Add Blog</button>
        }
        {
          // When isPending is true, render the Adding Blog... button.
          isPending && <button>Adding Blog...</button>
        }
      </form>
    </div>
  );
};

// Export the Create component in order to import it into App.js.
export default Create;
