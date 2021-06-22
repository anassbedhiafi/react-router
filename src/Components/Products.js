import React, { useState } from 'react'
import { listProducts } from './Data'
import ProductCard from './ProductCard'



const Products = () => {

  const [products, setProducts] = useState(listProducts);

  return (
    <div className="products-content">
      <h1>This is the page Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia esse dignissimos fugiat doloremque provident magnam vel! Nemo, exercitationem iusto debitis sed aliquam reiciendis ut facilis itaque sint? Aliquam minima obcaecati sequi illo nihil. Dolores officiis maxime dolorum iste repellendus omnis quibusdam! Accusantium porro autem ex iusto, rem tempore voluptatum sunt temporibus? Quo aspernatur doloribus ratione odio. Accusantium quas natus repellat veritatis ullam cupiditate obcaecati autem, explicabo tenetur culpa corporis aliquam laborum porro ad eaque praesentium iusto et architecto fugiat omnis quisquam dolores provident! Rem atque modi minima facere pariatur, nostrum voluptatem recusandae, obcaecati commodi, inventore illum aut accusantium. Neque.</p>
      <hr style={{ margin: "50px 0" }} />

      <div className="list-products">
        {products.map(product =>
          <ProductCard product={product} key={product.id} />
        )}

      </div>
    </div >
  )
}

export default Products
