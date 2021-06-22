import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {


  return (
    <div key={product.id} className="product-card">
      <Link to={`/products/${product.id}`} >
        <h3 className="product-link">{product.name}</h3>
      </Link>
      <img src={product.img} alt="product" className="product-img" />
    </div >
  )
}

export default ProductCard
