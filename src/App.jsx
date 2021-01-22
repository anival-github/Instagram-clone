import Feed from "./components/Feed";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Theme from "./components/theme/Theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Theme />
        <Header />
        <Route path="/" component={Feed} exact />
        <Route path="/profile" component={Profile} exact />
      </div>
    </Router>
  );
}

export default App;
