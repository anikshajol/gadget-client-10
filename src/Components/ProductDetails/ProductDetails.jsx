import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { brand } = useParams();

  console.log(brand);

  const [products, setProducts] = useState();
  console.log(brand);

  useEffect(() => {
    fetch(
      "https://as-gadget-server-side-k3thwcd9r-anikshajol.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  //   products
  //   .find((product) => product.brand == brand)
  const findProducts =
    products && products.find((item) => item.brand === brand);

  //   const { name, photo, price, rating, type, _id } = findProducts;

  const handleAddToCart = (photo, name, price) => {
    fetch(
      `https://as-gadget-server-side-k3thwcd9r-anikshajol.vercel.app/cart`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ photo, name, price }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Your data added Successfully!");
        }
      });
  };

  if (!findProducts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Details</h2>

      <div className="card py-5 px-2 shadow-xl">
        <figure className="scale-75 ">
          <img className="h-80 object-cover" src={findProducts?.photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{findProducts?.name}</h2>
          <div className="flex justify-between items-center">
            <p>Brand: {findProducts?.brand}</p>
            <p> Type: {findProducts?.type}</p>
          </div>

          <p> Price: {findProducts?.price}</p>
          <p>{findProducts?.rating}/10</p>
          <p>{findProducts?.description}</p>
          <div>
            <Link>
              <button
                onClick={() =>
                  handleAddToCart(
                    findProducts?.photo,
                    findProducts?.name,
                    findProducts?.price
                  )
                }
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </Link>

            <Link to={`/update/${findProducts.brand}/${findProducts._id}`}>
              <button className="btn btn-secondary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
