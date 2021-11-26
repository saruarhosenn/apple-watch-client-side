import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Products = ({ product }) => {
    const { title, img, dec, price, id } = product;

    return (
        <div className="shadow mb-5 p-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Title>$ {price}</Card.Title>
                <Card.Text>
                    {dec.slice(0, 98)}
                </Card.Text>
                <Link to={`/booking/${id}`}>
                    <Button variant="primary">Buy Now</Button>
                </Link>
            </Card.Body>
        </div>
    );
};

export default Products;