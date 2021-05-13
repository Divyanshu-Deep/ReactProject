import React from "react";
import Home from './components/Home'
import Products from "./components/products";
import About from "./components/About";
import Contact from "./components/Contact";
import Admin from './components/Admin'
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/admin"
          component={Admin} />
        <Route exact path="/about"
          component={About} />
           <Route exact path="/contacts"
          component={Contact} />
           <Route exact path="/products"
          component={Products} />

      </Switch>
  
  );
};

export default App;
