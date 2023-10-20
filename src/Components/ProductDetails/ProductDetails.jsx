import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { brand } = useParams();
  //   const [products, setProducts] = useState();
  console.log(brand);

  const [products, setProducts] = useState();
  console.log(brand);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  //   products
  //   .find((product) => product.brand == brand)
  const findProducts =
    products && products.find((item) => item.brand === brand);

  console.log(findProducts);

  const { description, name, photo, price, rating, type } = findProducts;

  return (
    <div>
      <h2>Product Details</h2>

      <div className="card py-5 px-2 shadow-xl">
        <figure className="scale-75 ">
          <img className="h-80 object-cover" src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between items-center">
            <p>Brand: {brand}</p>
            <p> Type: {type}</p>
          </div>

          <p> Price: {price}</p>
          <p>{rating}/10</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
