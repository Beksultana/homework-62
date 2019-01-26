import React, { Component } from 'react';
import { Route, Switch} from "react-router";
import { NavLink} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Country from "./containers/Countrys/Country";

class App extends Component {
  render() {
    return (
      <div className="Container">
          <nav className='links'>
              <ul>
                  <li>
                      <NavLink
                          className='link'
                          to="/"
                          exact activeClassName={'linkActive'}
                      >
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          className='link'
                          to="/about"
                          activeStyle={{
                              color: 'red'
                          }}
                      >
                          About
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          className='link'
                          to="/country"
                          activeStyle={{
                              color: 'green'
                          }}
                      >
                          Country
                      </NavLink>
                  </li>
              </ul>
          </nav>
         <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/about"  component={About}/>
             <Route path="/country"  component={Country}/>
         </Switch>
      </div>
    );
  }
}

export default App;
