import './App.scss';
import Home from "./Home";
import {Route} from "react-router-dom"
import Contact from './Contact';


function App() {
  return (
    <div className="App">
       <Route exact path="/Contact">
         <Contact/>
       </Route>
      <Route exact path="/">
      <Home />  
      </Route>


    </div>
  );
}

export default App;
