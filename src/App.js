// Import statements for functional components and react router components.
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// The App function component returns the entire user interface that
// gets rendered by ReactDOM.render.
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route
              // Use a colon ":" to indicate url params.
              // ":id" as a dynamic value that renders the blog with the matching id.
              path="/blogs/:id"
            >
              <BlogDetails />
            </Route>
            <Route
              // A catch all route if none of the other routes match the url entered.
              // Always place at bottom of Routes.
              path="*"
            >
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// Export the App component in order to import it into index.js.
export default App;
