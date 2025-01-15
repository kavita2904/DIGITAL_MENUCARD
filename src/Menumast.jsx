import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import './Menumast.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Menumast() {
  const [data, setData]=useState([]);
  const [md, setMenumast]=useState(""); 
  const  [newPrice, setPrice]=useState(0);
  const [newGid, setGid] = useState(0)
    const [newFid, setFid] = useState(0)
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

           function add(){
           axios.post("http://localhost:3000/addmenu",{
             "menu_name":md,
             "menu_price":  newPrice,
            "qid": newGid,
            "gid" : newFid

           })
           .then(responce=> {
            let sts=responce.data.status;
             console.log(responce. data);
             menumast();
            alert("Menu Group Create Success");
           })
         }
        
          // Delete menu mast 
          function del(mid){
            axios.delete("http://localhost:3000/delmenu",{
              data: { "id": mid}
            })
            .then(responce=>{
              console.log(responce.data);
              alert(responce.data.message);
              //fg();
              menumast();
            })
            .catch(error=> {
              console.log(error.responce.data);   // logs erroedetail from the
            });
          }
        
         
          function updmenumast(id){
        
            const r = confirm('Do you want to update Food Group Name')
            // alert(id)
            localStorage.setItem('foodId', id);
    
            if(r){
               navigate('/Updmenumast'); 
            }else{
                return false
            }
            menumast();
    
        }


    return (
      <>
       <Navb/> 
      <Card>
        <h1><Card.Header  className='heading' > Menu Mast </Card.Header></h1>
        <div className='contaierMain'> <br></br>
        <form>
         <input type='text'  className='handlePwd' onChange={getName}   placeholder="Enter the new Menu Name"  ></input>  <br></br>
        
         <input type='text'  className='handlePwd' onChange={inputMenuPrice}   placeholder="Enter the new Menu Price"  ></input>  <br></br>
        
         <input type='text'   className='handlePwd' onChange={inputFoodGroupId}   placeholder="Enter the new FOOD FROUP ID"  ></input>  <br></br>
        
         <input type='text'   className='handlePwd' onChange={inputQtyTypeId}   placeholder="Enter the new QUANTITY TYPE ID"  ></input>  <br></br>
          {/* <Button variant="success"  onClick={add}>ADD NEW MENU</Button> <br></br> */}

         <center> <button  className='can' onClick={add}>ADD NEW MENU</button></center>
         </form>
         </div>

        <Card.Body>
          
        <Table className="custom-table" striped bordered hover>
      <thead>
        <tr>
         
          <th>MID</th>
            <th>MENU NAME</th>
            <th>MENU PRICE</th>
            <th>FOOD GROUP ID</th>
            <th>QUANTITY TYPE ID</th>
              
            <th>DATE</th>
            <th>DELETE</th>
            <th>UPDATE</th>
        </tr>
      </thead>

      
      <tbody>
        {data.map((item)=>{
          return(
                <tr>
          <td>{item.mid}</td>
          <td>{item.menu_name}</td>
          <td>{item.menu_price}</td>
          <td>{item.gid}</td>
          <td>{item.qid}</td>
          <td>{item.created_at}</td>
          <td> <button className='danger'  onClick={(e)=>getMid(item.mid)}>Delete</button></td>
          {/* <td> <Button variant="danger" onClickCapture={()=>updmenumast(item.mid)} >UPDATE</Button></td>
             */}
            
            
            <td> <button   className='up' onClickCapture={()=>updmenumast(item.mid)} >UPDATE</button></td>


        </tr> )
         } )}
       
          
      </tbody>
    </Table>


        </Card.Body>
      </Card>
      </>
    );
}
  
 