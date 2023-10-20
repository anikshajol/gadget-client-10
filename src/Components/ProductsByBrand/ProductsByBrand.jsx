import PropTypes from "prop-types";

const ProductsByBrand = ({ products }) => {
  console.log(products.brand);
  const { brand, description, name, photo, price, rating, type } = products;
  return (
    <div>
      {brand === undefined ? (
        <p>No data </p>
      ) : (
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
            <p>{description.slice(0, 50) + ".."}</p>
            <div className="flex justify-between">
              <button className="btn btn-primary">Details</button>
              <button className="btn btn-secondary">Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProductsByBrand.propTypes = {
  products: PropTypes.object,
};

export default ProductsByBrand;