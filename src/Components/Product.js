import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { listProducts } from './Data'
import { Link } from 'react-router-dom'

const Product = ({ match }) => {

    // console.log(match)
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(listProducts.find(product => product.id === +match.params.id))
    }, [match.params.id]);

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <h3>{product.description}</h3>
            <img src={product.img} alt="product" style={{ width: "200px" }} />
            <br />
            <Link to="/products">
                <Button variant="info">Go Back</Button>
            </Link>
        </div>
    )
}

export default Product
