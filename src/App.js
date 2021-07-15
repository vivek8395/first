import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Pdetails from './component/Pdetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
        <Header/>
        <Main/>
        </Route>

        <Route exact path='/pdetails'>
          <Pdetails />
        </Route>
      </Router>
     
    </div>
  );
}

export default App;
