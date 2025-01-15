import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import './Navb.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function Navb() {

      const navigate=useNavigate();

        function  logout(){
          const r= confirm("Are you sure to Logout?");

         if(r){
          navigate('/')
         }else{
          return false
         }

        }



  return (
    <>
      
      <br />
      {/* <Navbar bg="primary" data-bs-theme="dark"> */}
      <Navbar className='heading'  data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Admine Page</Navbar.Brand>
          {/* <Nav className="me-auto"> */}
           {/* <Navbar.Brand href="#home"> <Link to="/app" >Home</Link></Navbar.Brand>  */}

          <Navbar.Brand href="#home"><Link to="/menucard" >Menucard</Link></Navbar.Brand>

          {/* <Navbar.Brand href="#home"> <Link to="/contact" >Contact</Link></Navbar.Brand> */}
          <Navbar.Brand href="#home"> <Link to="/food" >Foodgroup</Link></Navbar.Brand>

          <Navbar.Brand href="#home"> <Link to="/qty" >QTY Mast</Link></Navbar.Brand>
          
          <Navbar.Brand href="#home"> <Link to="/menu" >MENU Mast</Link></Navbar.Brand>
         
          <Navbar.Brand> <input type="button"   className='logout' value='Logout' onClick={logout} name="" id="" /> </Navbar.Brand> 
           
            
          {/* </Nav> */}
        </Container>
      </Navbar>

      <br />
    
    </>
  );
}

 