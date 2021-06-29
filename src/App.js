import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Login from './Login';
import Chat from './Chat';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useState } from 'react';
import { useStateValue } from './StateProvider';

  
function App() {
  const [{user},dispatch]=useStateValue();
  
  return (
    <div className="app">
    {!user ?
   (<Login/>):
     (<div className='app_body'>
       <Router>
       <Sidebar/>
         <Switch>
           
              
              <Route path='/rooms/:roomId'>
              <Chat/>
           </Route>
           <Route path='/'>
              <Chat/>
           </Route>
         </Switch>
      
       </Router>
     </div>)}
    </div>
  );
}

export default App;
