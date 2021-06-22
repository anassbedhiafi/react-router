import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { Route, Switch } from 'react-router-dom'

import Home from './Components/Home'
import Products from './Components/Products'
import About from './Components/About'
import Product from './Components/Product'
import Errors from './Components/Errors'


function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />

        <Route path="/about" component={About} />
        {/* <Route path="/about" render={() => <About testProps="this is a props" />} /> */}

        <Route path="/products/:id" component={Product} />
        <Route path="/*" component={Errors} />
      </Switch>
    </div>


  );
}

export default App;