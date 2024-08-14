import './App.css';
import About from './Components/Pages/About.jsx';
import Home from './Components/Pages/Home.jsx';
import Contact from './Components/Pages/Contact.jsx';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/About'>
            <About/>
          </Route>

          <Route path='/Contact'>
            <Contact/>
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
