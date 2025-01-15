import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './Updqtymast.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Updqtymast() {
    const [data, setData]=useState([]);
    const [qn,  setQty]=useState(""); 
    const  [Gid, setGid]=useState(0);
    // const [newGid, setGid] = useState(0)
    //   const [newFid, setFid] = useState(0)
  
    const navigate = useNavigate();
    useEffect(()=>{
      qtymast();
    },[]  );

    const [id, setId] = useState("");
    function getQid(qid){
             setId(qid);
             del(qid);
    }
              //Function for the all foodgroup calling

      function  qtymast (){
        axios.get("http://localhost:3000/qtymast")
        .then(responce=> {
          let l=responce.data.qtymast;
         // let l=responce.data;
         setData(l);
          console.log(l);
        })
      }
        const getName=(e)=>
        {
          
          setGid(e.target.value);
        }

        const updqtymasttype=(e)=>
          {
            setQty(e.target.value);
           
          }
          function updqtymast(){
            axios.put("http://localhost:3000/updateqty",{
              "qty_type":qn,
               "qid":Gid
             })
            .then(responce=> {
             let sts=responce.data.status;
              console.log(responce. data);
              qtymast ();
             alert("Update QTY MAST CREATE Success");
            })
            navigate('/qty'); 
          }
         

          function back(){

            const r = confirm('Do you want to cancle update?')
            
            if(r)
                navigate('/qty');
            else
                return false
        }
            



    return (
        <>
        
        <Card>
          
          <h1><Card.Header className='heading' > UPDATE QTY MAST </Card.Header></h1>
          <div className='contaierMain'>
            <form>
           <input type='text' onChange={getName} className="handlePwd"   placeholder="Enter the qid id"  ></input>  <br></br>
          
           <input type='text' onChange={updqtymasttype} className="handlePwd"  placeholder="Enter the new Qty type"  ></input>  <br></br>
          
           
          <center><button  className="up" onClick={ updqtymast}>UPDATE</button></center> <br></br>
          <center> <button  className="can" onClick={back}>Cancle</button></center><br></br>
           </form>
           </div>
        </Card>
        </>
      );
  }
    
     