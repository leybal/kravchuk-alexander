import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import ContactContainer from './components/Contact/ContactContainer';

// import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App">

         <header className="masthead mb-auto bg-dark">
          <div className="inner container">
            <div className="masthead-brand float-md-left">
              <div>
                <Link className='nav-link' to='/'>Kravchuk Alexander</Link>
              </div>
            </div>
            <nav className="nav nav-masthead justify-content-center justify-content-md-start">
              <Link className='nav-link' to='/resume'>Resume</Link>
              <Link className='nav-link' to='/skills'>Skills</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </nav>
          </div>
        </header>

        <main>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/resume' component={Resume}/>
              <Route path='/skills' component={Skills}/>
              <Route path='/contact' component={ContactContainer}/>
              <Route path='*' render={() => {
                return (
                  <Redirect to='/'/>
                )
              }}
              />
            </Switch>
          </div>
        </main>

        <footer className="bg-dark">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link className="social-icon"
                     target="_blank"
                     to="https://www.facebook.com/profile.php?id=100019893572194">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="social-icon"
                     target="_blank"
                        to="https://github.com/leybal">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="social-icon"
                     target="_blank"
                        to="https://telegram.me/leybal">
                    <i className="fa fa-telegram" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className="social-icon"
                     target="_blank"
                        to="https://twitter.com/kravchuk018">
                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
