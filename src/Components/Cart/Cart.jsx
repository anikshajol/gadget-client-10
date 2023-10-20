import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { useState } from "react";

const Cart = () => {
  const cartProductID = useLoaderData();
  const [cartProducts, setCartProducts] = useState(cartProductID);

  console.log(cartProductID);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = cartProducts.filter(
              (product) => product._id !== _id
            );
            setCartProducts(remaining);
          });
      }
    });
  };

  return (
    <>
      <div className="h-screen">
        <h2>My Cart</h2>
        {cartProducts?.map((cart) => (
          <div key={cart._id} className="">
            <div className="flex py-2 px-2 items-center border border-red-500 w-1/2 mx-auto">
              <img className="h-10 object-cover" src={cart?.photo} alt="" />

              <h2 className="card-title">{cart?.name}</h2>

              <div className="ml-12 text-red-800 font-extrabold">
                {" "}
                <button onClick={() => handleDelete(cart._id)}>X</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Cart;
