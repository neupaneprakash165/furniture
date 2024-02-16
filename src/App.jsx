import React from 'react';
import'./App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from '../src/Components/Homepage/Navbar';
import Shop from './Components/Pages/Shop';
import Home from './Components/Homepage/Home';
import Contact from './Components/Pages/Contact';
const App = () => {
return( <div>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/' element={<Home/>}></Route>

      </Routes>
    </Router>


</div>
);
};
export default App; 