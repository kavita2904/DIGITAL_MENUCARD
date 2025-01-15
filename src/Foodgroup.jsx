
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Foodgrp.css'

export default function Foodgroup() { 

  const [data, setData]=useState([]);
  const [fd,setFg]=useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    fg();
  },[]  );

        const [id, setId] = useState("");
        function getFid(fid){
                 setId(fid);
                 del(fid);
        }

          function del(fid){
            axios.delete("http://localhost:3000/delfoodgroup",{
              data: { "id": fid}
            })
            .then(responce=>{
              console.log(responce.data);
              alert(responce.data.message);
              fg();
            })
            .catch(error=> {
              console.log(error.responce.data);   // logs erroedetail from the
            });
          }


      function fg (){
        axios.get("http://localhost:3000/food_group")
        .then(responce=> {
          let l=responce.data.foodgroup;
         // let l=responce.data;
         setData(l);
          console.log(l);
        })
      }
       const getName=(e)=>
       {
        setFg(e.target.value);
        
       }
          function add(){
          axios.post(" http://localhost:3000/addfoodgroup",{
            "group_name":fd
          })
          .then(responce=> {
           let sts=responce.data.status;
            console.log(responce. data);
           fg();
           alert("Food Group Create Success");
          })
        }
        

        function updFoodGroup(id){
        
          const r = confirm('Do you want to update Food Group Name')
          // alert(id)
          localStorage.setItem('foodId', id);
  
          if(r){
             navigate('/Updfoodgrp'); 
          }else{
              return false
          }
          fg();
  
      }
  


    return (
      <>
       <Navb/> 
      <Card>
        <h1><Card.Header  className='heading'  > Food Group </Card.Header></h1>
        <div className='contaierMain'> <br></br>
        <form>
         <input type='text'   className='handlePwd'  onChange={getName}  placeholder="Enter the new food group"  ></input>  <br></br>
        <center>  <button  className='can' onClick={add}>ADD GROUP</button> </center> 
         </form>
         </div>

        <Card.Body>
          
        <Table className="custom-table" striped bordered hover>
      <thead>
        <tr>
         
          <th>GID</th>
            <th>Group Name</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>{
          return(
                <tr>
          <td>{item.gid}</td>
          <td>{item.group_name}</td>
          <td> <button className='danger'   onClick={(e)=>getFid(item.gid)}>Delete</button></td>
         
          <td> <button  className='up' onClickCapture={()=>updFoodGroup(item.gid)}  >UPDATE</button></td>

          {/* <td><button className="uptBtn" onClickCapture={()=>updFoodGroup(item.gid)}>UPDATE</button></td> */}

        </tr> )
         } )}
        


      </tbody>
    </Table>

        </Card.Body>
      </Card>
      </>
    );}
