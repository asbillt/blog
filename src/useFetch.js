// Import useState and useEffect from the react library.
import { useState, useEffect } from "react";

// Create the custom hook, useFetch.
// Pass in the parameter, url.
const useFetch = (url) => {
  // Create state variable, data, with initial state set to null.
  const [data, setData] = useState(null);
  // Create state variable, isPending, with initial state set to true.
  const [isPending, setIsPending] = useState(true);
  // Create state variable, error, with initial state set to null.
  const [error, setError] = useState(null);

  // useEffect hook runs a function every render of the component.
  // Create useEffect hook with array dependency, [url].
  // Call useEffect hook when browser first loads and
  // whenever the url parameter changes.
  useEffect(() => {
    // Create an AbortController, that will be associated with a specific fetch request,
    // that will be used the stop that fetch request.
    const abortCont = new AbortController();

    // Make a fetch request to the JSON server on port 8000; Resource name "blogs".
    // Add the second fetch argument, {signal: abortCont.signal}, to associate the
    // AbortController with the below fetch request.
    fetch(url, { signal: abortCont.signal })
      // Once the promise is resolved for the GET request,
      // Then take the response object and pass it into the function as the "res" parameter.
      .then((res) => {
        // Check the response object ok property; If it is not ok throw the error message "could not fetch...".
        // If the response object is ok, skip if statement, parse the data into a json object.
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      // Once the res.json() promise is resolved,
      // Then take the parsed JSON data and pass it into the function as the "data" parameter.
      .then((data) => {
        // Call the setData function and pass the data as the new state of the blogs state variable.
        setData(data);
        // Call the setIsPending function and update it's state to false.
        setIsPending(false);
        // Call the setError function and update the state of error to null in the case
        // of subsequent requests (if we get data), to update the state from any error
        // message back to null.
        setError(null);
      })
      // The catch block catches any type of network error and will fire
      // a function when it catches an error. i.e. can't connect to server.
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          // Update the state of isPending to false.
          setIsPending(false);
          // Update the state of error with the error message.
          setError(err.message);
        }
      });

    // Run a clean up function, that aborts the fetch request that it is associate with,
    // when the component that uses the useFetch hook and useEffect hook, unmounts.
    return () => abortCont.abort();
  }, [url]);

  // Return the following back to the Home component:
  // 1. The data state variable with any blogs data it contains.
  // 2. The isPending state variable with either true or false boolean values.
  // 3. The error state variable, with the error it contains or null.
  return { data, isPending, error };
};

// Export the useFetch hook in order to import it into Home.js and BlogDetails.js.
export default useFetch;
