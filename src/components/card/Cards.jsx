/* eslint-disable react/prop-types */
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

import "../../sass/Card.scss";

const Cards = ({ data, handleCardClick }) => {
  return (
    <>
      <section className="card-box gap-5 my-5">
        {data.length !== 0 ? (
          data.map((el) => (
            <div
              key={el.id}
              className="cards"
              onClick={() => handleCardClick(el.id)}
            >
              {/* <img className="card-img-top" src={el.image} alt={el.name} />
              <div className="card-body mt-3 p-3">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text my-3">{el.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link className="btns">Выбрать</Link>
                  <p className="price">от {el.price} ₽</p>
                </div>
              </div> */}
              <Card>
                <Card.Img variant="top" src={el.image} />
                <Card.Body>
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>{el.description}</Card.Text>
                  <Button>
                    <Link variant="primary" className="btn btn-primary">Add pizza</Link>
                  </Button>
                  <p>от {el.price} ₽</p>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h3>Product Not Found</h3>
        )}
      </section>
    </>
  );
};

export default Cards;
