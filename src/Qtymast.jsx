
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Navb from './Navb';
// import Table from 'react-bootstrap/Table';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// import './Qtymast.css'

// export default function Qtymast() { 

//   const [data, setData]=useState([]);
//   const [qd,setFg]=useState("");
//   const navigate = useNavigate();
//   useEffect(()=>{
//     qty();
//   },[]  );

//         const [id, setId] = useState("");
//         function getFid(fid){
//                  setId(fid);
//                  del(fid);
//         }

//           function del(fid){
//             axios.delete("http://localhost:3000/delqty",{
//               data: { "id": fid}
//             })
//             .then(responce=>{
//               console.log(responce.data);
//               alert(responce.data.message);
//               qty();
//             })
//             .catch(error=> {
//               console.log(error.responce.data);   // logs erroedetail from the
//             });
//           }


//       function qty (){
//         axios.get("http://localhost:3000/qtymast")
//         .then(responce=> {
//           let l=responce.data.foodgroup;
//          // let l=responce.data;
//          setData(l);
//           console.log(l);
//         })
//       }
//        const getName=(e)=>
//        {
//         setFg(e.target.value);
        
//        }
//           function add(){
//           axios.post("http://localhost:3000/addqty",{
//             " qty_type": qd

//           })
//           .then(responce=> {
//            let sts=responce.data.status;
//             console.log(responce. data);
//             qty();
//             alert("Qtymast Create Success");
//           })
//         }
        

//         function updqtymast(id){
        
//           const r = confirm('Do you want to update QTY MAST')
//           // alert(id)
//           localStorage.setItem('foodId', id);
  
//           if(r){
//              navigate('/Updqtymast'); 
//           }else{
//               return false
//           }
//           qty();

  
//       }
  


//     return (
//       <>
//        <Navb/> 
//       <Card>
//         <h1><Card.Header  className='heading'  > QTY MAST </Card.Header></h1>
//         <div className='contaierMain'> <br></br>
//         <form>
//          <input type='text'   className='handlePwd'  onChange={getName}  placeholder="Enter the new food group"  ></input>  <br></br>
//         <center>  <button  className='can' onClick={add}>ADD QTY MAST</button> </center> 
//          </form>
//          </div>

//         <Card.Body>
          
//         <Table className="custom-table" striped bordered hover>
//       <thead>
//         <tr>
         
//         <th>QID</th>
//             <th>QTY TYPE</th>
//             <th>DATE</th>
//             <th>DELETE</th>
//             <th>UPDATE</th>
          
//         </tr>
//       </thead>
//       <tbody>
//       {data.map((item)=>{
//           return(
//                 <tr>
//           <td>{item.qid}</td>
//           <td>{item.qty_type}</td>
//           <td>{item.created_at}</td>


//           <td> <button className='danger'   onClick={(e)=>getFid(item.qid)}>Delete</button></td>
         
//           <td> <button  className='up' onClickCapture={()=>updqtymast(item.qid)}  >UPDATE</button></td>

//           {/* <td><button className="uptBtn" onClickCapture={()=>updFoodGroup(item.gid)}>UPDATE</button></td> */}

//         </tr> )
//          } )}
        


//       </tbody>
//     </Table>

//         </Card.Body>
//       </Card>
//       </>
//     );}






//------------------------------------------


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Qtymast.css'
import { useEffect, useState } from 'react';

export default function Qtymast() { 

  const [data, setData]=useState([]);
  const [qn, setQt]=useState("");

  const navigate = useNavigate();
  useEffect(()=>{
    qty();
  },[]  );

        const [tid, setId] = useState("");
        function getTid(id){
                 setId(id);
                 del(tid);
        }

          function del(tid){
            axios.delete("http://localhost:3000/delqty",{
              data: { "id": tid}
            })
            .then(responce=>{
             console.log(responce.data);
             // console.log(responce.qtymast);
              alert(responce.data.message);
              qty();
            })
            .catch(error=> {
              console.log(error.responce.data);   // logs erroedetail from the
             // console.log(error.responce.qtymast);
            
            });
          }
          

          // function del(id){
          //   axios.delete("http://localhost:3000/delqty",{
          //     data: { "id": id}
          //   })
          //   .then(response=>{
          //     console.log(response.data);
          //     alert(response.data.message);
          //     qty();
          //   })
          //   .catch(error=> {
          //     console.log(error.response.data);   // logs erroedetail from the
          //   });
          // }

        //   function del(id) {
        //     axios.delete("http://localhost:3000/delqty", {
        //         data: { "id": id }
        //     })
        //     .then(response => {
        //         console.log("Response data:", response.data);
        //         alert(response.data.message);
        //         qty();
        //     })
        //     .catch(error => {
        //         if (error.response && error.response.data) {
        //             console.log("Error response data:", error.response.data);
        //         } else {
        //             console.error("Unexpected error occurred:", error.message);
        //         }
        //     });
        // }
        



      function qty (){
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
        setQt(e.target.value);
        
       }
          function add(){
          axios.post("http://localhost:3000/addqty",{
            "qty_type":qn
          })
          .then(responce=> {
           let sts=responce.data.status;
            console.log(responce. data);
           qty();
           alert("QTY  Create Success");
          })
        }
        

        // function updqtymast(id){
        //  const r = confirm('Do you want to update QTYMAST Name')
        //   // alert(id)
        //   localStorage.setItem('foodId', id);
        //     if(r){
        //      navigate('/Updqty'); 
        //   }else{
        //       return false
        //   }
        //   qty();
        // }
  
         
        function updqty(id){
        
          const r = confirm('Do you want to update QTY TYPE')
          // alert(id)
          localStorage.setItem('foodId', id);
  
          if(r){
             navigate('/Updqty'); 
          }else{
              return false
          }
          fg();
  
      }




    return (
      <>
       <Navb/> 
      <Card>
        <h1><Card.Header   className='heading'   > QTY MAST </Card.Header></h1> <br></br>
        <div className='contaierMain'>  <br></br>
        <form>

        <input type='text'  className='handlePwd' onChange={getName}  placeholder="Enter the new qtymast"  ></input>  <br></br>
        <center> <button  className='can'  onClick={add}>ADD QTY</button></center><br></br>

         </form>
         </div>
       <Card.Body>
       <Table   className="custom-table" striped bordered hover>
      <thead>
        <tr>
           <th>QID</th>
            <th>QTY TYPE</th>
            <th>DELETE</th>
            <th>UPDATE</th>
           </tr>
      </thead>
      <tbody>
        {data.map((val)=>{
          return(
                <tr>
          <td>{val.qid}</td>
          <td>{val.qty_type}</td>

          {/* <td> <button className='danger'  onClick={(e)=>del(tid)(item.qid)}>Delete</button></td> */}
          <td> <button className='danger'   onClick={(e)=>getTid(val.qid)}>Delete</button></td>
         

          <td> <button className='up' onClickCapture={()=>updqty(val.qid)}  > UPDATE</button></td>

          {/* <td><button className="uptBtn" onClickCapture={()=>updFoodGroup(item.gid)}>UPDATE</button></td> */}

        </tr> )
         } )}
         </tbody>
    </Table>
       </Card.Body>
      </Card>
      </>
    );}


