import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
//import './index.css';
import Login from './login.jsx';
//import Contact from './Contact.jsx';
import Menucard from './Menucard.jsx';
import Foodgroup from './Foodgroup.jsx';
import Qtymast from './Qtymast.jsx';
import Menumast from './Menumast.jsx';
//import Updfoodgrp from './Updfoodgrp.jsx';
import Updfoodgrp from './Updfoodgrp.jsx';
import Updqtymast from './Updqtymast.jsx';
import Updmenumast from  './Updmenumast.jsx';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<App />} />
         <Route path="/menucard" element={<Menucard />} />
        {/* <Route path="/contact" element={<Contact />} />  */}
        <Route path="/food" element={<Foodgroup />} />
        <Route path="/qty" element={<Qtymast />} />
        <Route path="/menu" element={<Menumast />} />
          <Route path="/Updfoodgrp" element={<Updfoodgrp />} />
      
          <Route path="/Updmenumast" element={<Updmenumast />} />
          <Route path='/updqty' element={<Updqtymast/>}/>

        


      </Routes>
    </BrowserRouter>
  </StrictMode>
)
