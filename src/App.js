import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import Navbar from './Navbar';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
  
    <div className="content">
      <Switch>
        <Route exact path="/"> 
          <Home/>

        </Route>
        <Route path="/create"> 
          <Create/>

        </Route>
        <Route path="/blogs/:id"> 
          <BlogDetails/>

        </Route>
      </Switch>
   
    </div>
 
    </div>
    </Router>
  );
}

export default App;
