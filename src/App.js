import { firebaseConfig } from './config/Config';
import { initializeApp } from 'firebase/app';

import './App.css';
import { Home } from './pages/Home'; 
import { About } from './pages/About';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Contacts } from './pages/Contacts';


const FirebaseApp = initializeApp( firebaseConfig)  

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path= "/" element={ <Home/> } />
        <Route path= "/Home" element= {<Home/>} />
        <Route path= "/About"  element= { <About/> } />
        <Route path= "/Contacts" element= {<Contacts/> } />

      </Routes>
     
 
    
    </div>
  );
}

export default App;
