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
                          exact activeClassName={'linkActiveHome '}
                          activeStyle={{
                          color: 'black',
                          background: 'gold'
                      }}

                      >
                          Home
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          activeClassName={'linkActiveAbout'}
                          className='link'
                          to="/about"
                          activeStyle={{
                              color: 'black',
                              background: 'gold'
                          }}
                      >
                          Phone
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          activeClassName={'linkActiveCountries'}
                          className='link'
                          to="/country"
                          activeStyle={{
                              color: 'black',
                              background: 'gold'
                          }}
                      >
                          Country
                      </NavLink>
                  </li>
              </ul>
          </nav>
         <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/about" exact component={About}/>
             <Route path="/country" exact component={Country}/>
         </Switch>
      </div>
    );
  }
}

export default App;
