import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';

import './Home.css'
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import ReviewShow from '../ReviewShow/ReviewShow';



const Home = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth()

    useEffect(() => {
        fetch('https://fierce-sierra-20822.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    return (
        <>
            <div className="bg">
                <Container>
                    <Row>

                        <Col xs={12} md={6}>
                            <div className="banner-text">
                                <div>
                                    <span className="text-danger">smart watch</span>


                                    <h1 className="text-white" >APPLE
                                        SUPER <br />WATCH
                                    </h1>

                                    <p className="text-light">It can be a very secure path to earn good money and make you very successfully croativety ontreprenour. You can tako advice from experience Person and improve you.</p>
                                    <Link to="/explore">
                                        <button className="btn btn-primary">All Products</button>
                                    </Link>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
            <h1 className="text-center my-5">- Products -</h1>
            {!isLoading && <div className="product-area">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                    ></Products>)
                }

            </div>}
            {
                isLoading &&
                <Button variant="primary" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            }
            <ReviewShow></ReviewShow>

            <div className="container">
                <h1 className="text-center my-5">- SERVICES -</h1>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 p-4 border">
                        <h4>WATCH COLLECTION</h4>
                        <p>At Brave, we work for our customers every day to deliver the best mobile applications for any purposes. We work both with individual and corporate customers.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 p-4 border">
                        <h4>WEBSITES</h4>
                        <p>Our expert team can design a website of any complexity, from a landing page to a corporate multipage website. Everything depends on what you are looking for.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 p-4 border">
                        <h4>CONSULTING</h4>
                        <p>Brave team is glad to provide you with professional IT consulting services 24/7. We have been helping lots of companies since our establishment.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;