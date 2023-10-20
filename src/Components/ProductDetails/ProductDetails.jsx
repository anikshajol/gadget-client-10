import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

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
    products && products?.find((item) => item.brand === brand);

  console.log(findProducts);

  const { description, name, photo, price, rating, type, _id } = findProducts;

  const handleAddToCart = (productID) => {
    fetch(`http://localhost:5000/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productID }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Your data added Successfully!");
        }
      });
  };

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
          <Link>
            <button
              onClick={() => handleAddToCart(_id)}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
