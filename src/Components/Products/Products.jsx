// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsByBrand from "../ProductsByBrand/ProductsByBrand";

const Products = () => {
  // const filterByName = loadedProducts.find(product=> product.name ===)
  // const loadedBrand = useLoaderData();
  // console.log(loadedBrand);
  const { brand } = useParams();
  const [products, setProducts] = useState();
  console.log(brand);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <h2>Products by brand</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* {filterByBrand.map((product) => (
          <div key={product._id}>
            
          </div>
        ))} */}

        {products &&
          products
            .filter((product) => product.brand == brand)
            .map((products, idx) => (
              <ProductsByBrand key={idx} products={products}></ProductsByBrand>
            ))}
      </div>
    </div>
  );
};

export default Products;
