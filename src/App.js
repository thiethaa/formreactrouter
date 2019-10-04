import React, { Component } from 'react';
import './App.css';
//components
import Home from './Components/Home';
import Product from './Components/OurProduct';
import Recipe from './Components/Recipe';
import Navigation from './Components/Navigation';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import Error from './Components/Error';

//bg particles
import Particles from 'react-particles-js';
//router
import {BrowserRouter,Route,Switch } from 'react-router-dom';


const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
      }
    }
  }
};

class App extends Component {
constructor(props){
  super(props);

    this.state = {
      
    }
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Particles className="particles" params={particlesOptions} />
          <Navigation/>
          
            <Switch>
              <Route path ="/" component={Home} exact/>
              <Route path ="/OurProduct" component={Product} exact/>
              <Route path ="/OurProduct/:id" component={Recipe}/>
              <Route path ="/SignIn" component={SignIn}/>
              <Route path ="/SignUp" component={SignUp}/>
              <Route component={Error}/>
            </Switch>
        </div>
      </BrowserRouter>
    
    )
  }
}
export default App;