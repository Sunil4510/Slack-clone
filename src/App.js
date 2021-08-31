import React  from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chat from './Components/Chat';
import { useStateValue } from './Authentication/StateProvider'; 
import Login from './Authentication/Login';
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <React.Fragment>
    <div className="app">
      <Router>
      {!user?
        (<h1><Login/></h1>)
        :(
          <>
        <Header/>
          <div className="app_body">
            <Sidebar/>
              <Switch>
                  <Route exact path="/"> <h1>hello</h1></Route>
                  <Route exact path="/room/:roomId"><Chat/></Route>    
              </Switch>
          </div>
          </>
          )}
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
