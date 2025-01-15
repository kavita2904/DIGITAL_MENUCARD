import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Home() {
  const[nm,setNm]=useState("");
  const[id,setId]=useState("");
  useEffect(()=>{
    setNm(localStorage.getItem("name"));
    setId(localStorage.getItem("id"));
    console.log("name=".nm);
    api_data();
  },[]);

   function api_data(){
    axios.get("https://api.rootnet.in/covid19-in/stats/latest")
    .then(responce=>{
      console.log(responce.data);
    })
   }

    return (
      <>
       <Navb/> 
      <Card>
        <h1><Card.Header>WELCOME {nm} </Card.Header></h1>
        <Card.Body>
          <Card.Title>ID {id}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </>
    );
  }
  
 









// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Navb from './Navb.jsx';
//  function Home() {
//     return (
//       <>
//         <Navb/>

//         <Card style={{ width: '18rem' }}>
//       <ListGroup variant="flush">
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//     </Card>
//     </>
//     );
//   }
  
//   export default Home;