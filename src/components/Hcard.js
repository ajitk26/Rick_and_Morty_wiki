import React from "react";
import Card from "react-bootstrap/Card";
import './Hcard.css'

export default function Hcard(props) {
  console.log(props);

  return (
        <Card className="Hcard" style={{ width: "18rem"}}>
          <Card.Img variant="top" src={props.data.image} />
          <Card.Body>
            <Card.Text className='container'>
              <p><b>Name:- </b> {props.data.name}</p>
 
              <p><b>Gender:- </b> {props.data.gender}</p>
              <p><b>Species:-</b> {props.data.species}</p>
              <p><b>Status:-</b> {props.data.status}</p>
              <p><b>Location:-</b> {props.data.location.name}</p>
              <p><b>Origin:-</b> {props.data.origin.name}</p>
            </Card.Text>
          </Card.Body>
        </Card>
     
    // <div>
    //     <img src={props.data.image} />
    //     <h1>{props.data.name}</h1>
    //     <h1>{props.data.gender}</h1>
    //     <h1>{props.data.species}</h1>
    //     <h1>{props.data.status}</h1>
    // </div>
  );
}
