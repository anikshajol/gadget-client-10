import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const { _id } = loadedData;
  console.log(_id);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const products = { photo, name, brand, type, price, description, rating };

    console.log(products);

    fetch(`https://localhost:5000/products/${brand}/${_id}/${name}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
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
      <h2 className="text-center">Update Products</h2>
      <form onSubmit={handleUpdateProduct}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {/* image url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Set Image URL"
                name="photo"
                className="input
                 input-bordered"
              />
            </label>
          </div>
          {/* product name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                className="input input-bordered"
              />
            </label>
          </div>
          {/* brand name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Brand Name"
                name="brand"
                className="input input-bordered"
              />
            </label>
          </div>
          {/* type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Type"
                name="type"
                className="input input-bordered"
              />
            </label>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Product Price"
                name="price"
                className="input input-bordered"
              />
            </label>
          </div>

          {/* short description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Give a short description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Add a short description"
                name="description"
                className="input input-bordered"
              />
            </label>
          </div>

          {/* Ratting */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating here"
                name="rating"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
        <div className="text-center">
          <input
            className="input input-bordered"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProducts;
