import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const cartProductID = useLoaderData();

  console.log(cartProductID);

  return (
    <div className="max-h-screen">
      <h2>My Cart</h2>
      {cartProductID?.map((cart) => (
        <div key={cart._id} className="">
          <div className="flex py-2 px-2 items-center border border-red-500 w-1/2 mx-auto">
            <img className="h-10 object-cover" src={cart?.photo} alt="" />

            <h2 className="card-title">{cart?.name}</h2>

            <div className="ml-12 text-red-800 font-extrabold">
              {" "}
              <button>X</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
