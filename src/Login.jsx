// import React from "react";
// import { useState, } from "react";
// import { useNavigate } from "react-router-dom";
// // import { useState } from "react";
// import './Login.css'

// export default function Login() {
//     const navigate = useNavigate();
//     const [pwd, setPwd] = useState(0)
//     const handlePwd = (e) => {
//         setPwd(e.target.value);
//     }

//     // Credintials for the login the user
//     function login() {
//         const p = 12345;

//         if (p == '') {
//             alert("Please enter your password")
//         } else {
//             if (p == pwd) {
//                 alert('Login Success')
//                 navigate('/Home')
//             } else {
//                 alert('Login Failed')
//             }
//         }
//     }

//     const backImage = {
//         backgroutImage: `url('./assets/HotelIamge.jpg')`
//     }

//     return (
//         <>
//             <div className="heading">
//                 <h2>HOTEL SULTAN</h2>
//             </div>

//             <div className="containerMain">
//                 <div style={backImage} className="header">

//                     <h3>ADMIN LOGIN</h3><br />
//                     <form action="">
//                         <input className="handlePwd" type="number" onChange={handlePwd} name="" id="" /><br />
//                         <button className="LoginBut" type="submit" onClick={login}>LongIn</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }










//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
//import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import './Login.css'

//import './App.css'

export default function Login() {
    const navigate = useNavigate();
    const[pwd,setPwd]=useState(0);
    const handlePwd=(e)=>{
        setPwd(e.target.value)
    }
    // function login(){
    //     axios.post("https://codingshika.com/UMANG/API/admin_login.php?mobile=")
    //     .then(responce=>{
    //         let sts=responce.data.posts.status;
    //         console.log(sts);
    //         if(sts=="400"){
    //             let id=responce.data.posts.id;
    //             let nm=responce.data.posts.name;
    //             localStorage.setItem("id",id);
    //             localStorage.setItem("name",nm);
    //             alert("Login Succes " +nm);
    //             navigate("/App")
    //         }else{    <Form.Control type="number" onChange={handlePwd} placeholder="Enter Password "  /><br />
    //             alert("Login Failled");
    //         }





                //     })
    // }
   
   
    function login(){
       
        const p=12345;
        if (p==''){
            alert("Pleace Enter your Password")
        }
        else{
            if(p==pwd){
            alert("Login Success");
            navigate("/menucard")
        }else{
            alert("Login Failled");

        }}
    }
    const backImage = {
                backgroutImage: `url('./assets/HotelIamge.jpg')`
             }        
        return (
        <>
           <div className='heading'>
            <h1> HOTEL SULTAN</h1>
           </div>
           <div className='contaierMain'>
       <div style={backImage} className='header'>
        <h3> ADMIN LOGIN </h3> <br></br>
       <from action ="">
            {/* <input className="handlePwd" type="number" onChange={handlePwd}  placeholder="Enter Password "  name="" id="" /><br /> <br></br>
            */}

           {/* <input className="handlePwd" type="number" onChange={handlePwd} name="" id="" /> */}

           <input   type="number" className="inputBoxUpt"  placeholder="Enter Password "   onChange={handlePwd} ></input><br></br><br />

           <center> <button variant="warning" className='Loginbut' type='submit' onClick={login} >LOGIN</button> </center> 
            </from>
                 </div>
                 </div>
           </>
    );
  }
  




