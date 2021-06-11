import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import PPhome from "./components/PPhome";
import PPnavbar from "./components/PPnavbar";

function App() {

  return (
      <div className="container-fluid">
        <div className="container">
            <div className="content">
                <div className="container-fluid">
                    <PPnavbar />
                </div>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={PPhome} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
