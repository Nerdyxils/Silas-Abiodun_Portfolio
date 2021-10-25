import { AnimatePresence } from 'framer-motion';
import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import FooterMenu from './Components/footer-icons/Footer-Menu';
import Menu from './Components/menu-item/Menu';
import About from './Pages/about/about';
import contact from './Pages/contact/contact';
import Home from './Pages/home/Home';
import projects from './Pages/projects/projects';
import services from './Pages/services/services';

function App() {
  return (
    <div className="main">
      <div className="body">
      <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <Menu />
        <AnimatePresence exitBeforeEnter>
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/About' component={About} />
              <Route path='/Services' component={services} />
              <Route path='/Projects' component={projects} />
              <Route path='/Contact' component={contact} />
            </Switch>
        </AnimatePresence>
        
        <FooterMenu />
      </BrowserRouter>
      </div>
    </div>
    
  );
}

export default App;
