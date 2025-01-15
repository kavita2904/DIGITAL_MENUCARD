import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './Updfoodgrp.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Updfoodgrp() {
  const [data, setData]=useState([]);
  const [fn, setFoodname]=useState(""); 
  const  [Gid, setGid]=useState(0);
  // const [newGid, setGid] = useState(0)
  //   const [newFid, setFid] = useState(0)

  const navigate = useNavigate();
  useEffect(()=>{
    foodgroup();
  },[]  );

   const [id, setId] = useState("");
    function getMid(mid){
             setId(mid);
             del(mid);
    }
              //Function for the all foodgroup calling

      function foodgroup (){
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
          
          setGid(e.target.value);
        }

        const updateFoodName=(e)=>
          {
            setFoodname(e.target.value);
           
          }
      

           function updFoodGrp(){
           axios.put("http://localhost:3000/updatefoodgroup",{
             "group_name":fn,
              "gid":Gid

           })
           .then(responce=> {
            let sts=responce.data.status;
             console.log(responce. data);
             foodgroup();
            alert("Update food Group Create Success");
           })
           navigate('/food'); 
         }
        

         function back(){

          const r = confirm('Do you want to cancle update?')
          
          if(r)
              navigate('/food');
          else
              return false
      }
          
        

    return (
      <>
      
      <Card>
        <h1><Card.Header   className='heading'>   UPDATE FOOD GROUP </Card.Header></h1>
         <div className='contaiermain'>
         <form>
         <input type='text' onChange={getName}  className='handlePwd'  placeholder="Enter the id"  ></input>  <br></br>
           <br></br>
         <input type='text' onChange={updateFoodName}   className='handlePwd'  placeholder="Enter the newfood name"  ></input>  
<br></br>        

        {/* <button   className="button" onClick={updFoodGrp}> UPDATE </button><br></br>
        <button    className="sdbutton" onClick={back}> CANCEL</button> */}
         
        <center><button  className="button" onClick={updFoodGrp}>UPDATE</button></center> <br></br>
         <center><button    className="sdbutton" onClick={back}>CANCEL</button></center>
         </form>
         </div>
      </Card>
      </>
    );
}
  
 