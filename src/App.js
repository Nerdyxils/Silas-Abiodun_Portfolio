import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import FooterMenu from './Components/footer-icons/Footer-Menu';
import Menu from './Components/menu-item/Menu';
import About from './Pages/about/about';
import Contact from './Pages/contact/contact';
import Home from './Pages/home/Home';
import Projects from './Pages/projects/projects';
import Services from './Pages/services/services';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      rotateX: 60,
      y: "50vh", // Reduced distance for smoother entry
    },
    in: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 1.2, // Slightly longer for a more deliberate entrance
        ease: [0.6, 0.05, 0.1, 0.9], // Softer easing for a smoother curve
        type: "spring",
        stiffness: 70, // Lower stiffness for less bounce
        damping: 25, // Higher damping for more control
        mass: 1,
        delay: 0.2, // Small delay to stagger with exit
      },
    },
    out: {
      opacity: 0,
      scale: 0.95, // Less extreme scaling to avoid overlap
      rotateX: -60,
      y: "-50vh", // Reduced exit distance
      transition: {
        duration: 0.9, // Slightly shorter exit for separation
        ease: "easeOut", // Smoother exit curve
      },
    },
  };

  return (
    <div className="main">
      <div className="body" style={{ overflow: 'hidden' }}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Menu />
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch>
              <Route path="/" exact>
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                >
                  <Home />
                </motion.div>
              </Route>
              <Route path="/About">
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                >
                  <About />
                </motion.div>
              </Route>
              <Route path="/Services">
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                >
                  <Services />
                </motion.div>
              </Route>
              <Route path="/Projects">
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                >
                  <Projects />
                </motion.div>
              </Route>
              <Route path="/Contact">
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="in"
                  exit="out"
                >
                  <Contact />
                </motion.div>
              </Route>
            </Switch>
          </AnimatePresence>
          <FooterMenu />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;