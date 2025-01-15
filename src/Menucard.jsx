import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navb from './Navb';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Menucard.css'


export default function Menucard() {
  const [data, setData]=useState([]);
  useEffect(()=>{
    menucard();
  },[]  );

      function menucard (){
         axios.get("http://localhost:3000/menucard")
       // axios.get("http://localhost:3000/menu")
        .then(responce=> {
          let l=responce.data.menucard;
         // let l=responce.data;
         setData(l);
          console.log(l);
        })
      }

    return (
      <>
       <Navb/> 
      <Card>
        <h1><Card.Header className='heading'  >Menu Card </Card.Header></h1>
        <Card.Body>
        <div className='contaierMain'>  <br></br>
        <form>

        <Table className="custom-table" striped bordered hover>
      <thead>
        <tr>
         
          <th>Menu  Name</th>
          <th>Menu Price</th>
          <th>Group Name</th>
          <th>Qty</th>
         
        </tr>
      </thead>
      <tbody>
        {data.map((item)=>{
          return(
                <tr>
          <td>{item.menu_name}</td>
          <td>{item.menu_price}</td>
          <td>{item.group_name}</td>
          <td>{item.qty_type}</td>
                 
        </tr> )
         } )}
       
          
      </tbody>
    </Table>
    </form>
    </div>

        </Card.Body>
      </Card>
      </>
    );
  }
  
 