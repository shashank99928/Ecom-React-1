import React, { Component } from "react";
import "./App.css";
import { Route} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => <div>HAts page</div>;

class App extends Component {
  render() {
    return (
      <div className="App">
     
      
        <Route exact path="/" component={Homepage} />        
        <Route exact path="/hats" component={HatsPage} />
        
      </div>
    );
  }
}

export default App;
