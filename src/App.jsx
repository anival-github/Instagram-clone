import Feed from "./components/Feed";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Login from './components/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' component={Feed} exact/>
        <Route path='/profile' component={Profile} exact/>
        <Route path='/login' component={Login} exact/>
      </div>
    </Router>
  );
}

export default App;
