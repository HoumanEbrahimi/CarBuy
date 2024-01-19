import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router'; // Import from 'react-router' instead of 'react-router-dom'
import "./carlist.css";
import Col from 'react-bootstrap/Col';


const CarList = ({ id, imagePath, title, t1,model,Brand,removeCars, favoriteCars}) => {
  const [readInfo, setReadInfo] = useState(false);


  return (
    
    <div className="col-12 col-md-4 mb-3" id="click">
      <Card style={{ width: '22rem' }} className="CarList-main-card">
        <Card.Img className="CarList-img" style={{ width: 350 }} variant="top" src={imagePath} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Car Info
          </Card.Text>
          <Button onClick={() => removeCars(id)}>
            Not Intersted
          </Button>
          &nbsp;&nbsp;
          <Button onClick={() => favoriteCars(id)}>
            very Interested
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarList;
