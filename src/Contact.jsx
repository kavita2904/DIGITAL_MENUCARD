import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Menucard() {
  const [data,setData] = useState([])


useEffect(()=>{
  api();
},[]);
// const[sts,setSts]=useState("");
// const[nm,setNm]=useState("");
// function api(){
//   axios.get("https://codingshika.com/APP/WS_API/select_test.php")
//   .then(response=>{
//     console.log(response.data.posts.post[0]['Name']);
//     let s=response.data.posts.status;
//     let s1=response.data.posts.post[0]['Name'];
//     setNm(s1);
//     setSts(s);
//     console.Log(s);
//     console.Log(sts);
//   })
//}


function api (){
  axios.get("http://localhost:3000/menu")
  .then(responce=> {
    let l=responce.data.menulist;
   // let l=responce.data;
   setData(l);
    console.log(l);
  })
}



    return (
      <>
       <Navb/> 
      <Card>
        <h1><Card.Header>Menu Card</Card.Header></h1>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
           
          </Card.Text>
          {/* <Button variant="primary">{sts}</Button>
          <Button variant="primary">{nm}</Button> */}
        </Card.Body>
      </Card>
      </>
    );
  }
  
 