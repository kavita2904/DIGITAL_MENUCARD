import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Updmenumast.css'
import { useEffect, useState } from 'react';

export default function Menumast() {
  const [data, setData]=useState([]);
  const [md, setMenumast]=useState(""); 
  const  [newPrice, setPrice]=useState(0);
  const [newGid, setGid] = useState(0)
    const [newFid, setFid] = useState(0)
    const [newMid, setMid] = useState(0)
    const navigate = useNavigate();

  useEffect(()=>{
    menumast();
  },[]  );

   const [id, setId] = useState("");
    function getMid(mid){
             setId(mid);
             del(mid);
    }
              //Function for the all foodgroup calling

      function menumast (){
        axios.get("http://localhost:3000/menu")
        .then(responce=> {
          let l=responce.data.menulist;
         // let l=responce.data;
         setData(l);
          console.log(l);
        })
      }
      const getName=(e)=>
        {
         setMenumast(e.target.value);
         
        }

        const inputMenuPrice=(e)=>
          {
            setPrice(e.target.value);
           
          }


          const inputFoodGroupId=(e)=>
            {
              setGid(e.target.value);
             
            }



            const inputQtyTypeId=(e)=>
              {
                setFid(e.target.value);
               
              }

              const inputMenuId=(e)=>
                {
                  setMid(e.target.value);
                 
                }

           function updmenumast(){
           axios.put("http://localhost:3000/updatemenu",{
             "menu_name":md,
             "menu_price":  newPrice,
            "qid": newGid,
            "gid" : newFid,
            "mid":newMid,
           })
           .then(responce=> {
            let sts=responce.data.status;
             console.log(responce. data);
             menumast();
            alert("Menu Group Create Success");
           })
           navigate('/menu'); 
         }
        
         function back(){

          const r = confirm('Do you want to cancle update?')
          
          if(r)
              navigate('/menu')
          else
              return false
      }
          
        

    return (
      <>
      
      <Card>
        <h1><Card.Header className='heading' > UPDATE Menu Mast </Card.Header></h1>
         <div className='contaierMain'>

          <form>
          <input type='text' className='handlePwd' onChange={inputMenuId}   placeholder="Enter the new Menu ID"  /> <br></br>
        
         <input type='text' className='handlePwd' onChange={getName}   placeholder="Enter the new Menu Name"  />  <br></br>
        
         <input type='text' className='handlePwd' onChange={inputMenuPrice}   placeholder="Enter the new Menu Price"  /> <br></br>
        
         <input type='text' className='handlePwd' onChange={inputFoodGroupId}   placeholder="Enter the new FOOD FROUP ID"  />   <br></br>
        
         <input type='text' className='handlePwd' onChange={inputQtyTypeId}    placeholder="Enter the new QUANTITY TYPE ID"  /> <br></br> 
        
         
         <center><button    className='button' onClick={updmenumast}>UPDATE</button></center> <br></br>
         <center><button  className='sdbutton'  onClick={back}>CANCEL</button></center>
         </form>
         </div>
          </Card>
      </>
    );
}
  
 