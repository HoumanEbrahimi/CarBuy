import React from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FavCarList = ({ id, imagePath, title, t1, model, Brand, removeCars, favoriteCars, Dealership, email }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/intoPage", { state: { id, imagePath, title, model, Brand } });
  };

  const ButtonMailto = ({ mailto, label }) => {
    return (
      <button
        className="dealership-btn"
        to={email}
        onClick={(e) => {
          window.location.href = `mailto:${mailto}`;
          e.preventDefault();
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="row row-cols-5 px-5 mx-5 px-5 mb-3">
      <div className="col-12 col-md-6 col-lg-4 mb-3" id="click">
        <Card style={{ width: '22rem' }} onClick={handleCardClick} className="CarList-main-card">
          <Card.Img className="CarList-img" style={{ width: 350 }} variant="top" src={imagePath} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Car Info</Card.Text>
            <button className="dealership-btn" onClick={() => window.open(Dealership, "_blank")}>
              Dealer
            </button>
            <ButtonMailto label="Contact Dealer" mailto={email} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FavCarList;
