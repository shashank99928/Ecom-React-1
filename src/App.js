import React, { Component } from "react";
import "./App.css";
import { Route} from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

import ShopPage from './pages/shop/shop.component'

class App extends Component {
  render() {
    return (
      <div className="App">
     
      
        <Route exact path="/" component={Homepage} />        
        <Route exact path="/shop" component={ShopPage} />
        
      </div>
    );
  }
}

export default App;
