import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services"; 
import Portfolio from "./components/Portfolio"; 

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Particles
          className="particles-canvas"
          params={{ 
            Particles: {
              number:{
                value: 30,
                density: {
                  enable: true, 
                  value_area: 900
                }
              },
              shape: {
                type: "square",
                stroke: {
                  width: 6,
                  color: "#f9ab00"
                }
              }
            }
          }}
        />
        <Switch>
          
          <Route path="/" exact component={Header}/>
          
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Services/>
        </Switch>
      </Router>
    </div>

   
  );
}

export default App;
