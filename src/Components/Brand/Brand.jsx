import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Brand = ({ brands }) => {
  const { image, brand_name } = brands;

  return (
    <Link to={`/products/${brand_name}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure className="scale-75">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
        </div>
      </div>
    </Link>
  );
};

Brand.propTypes = {
  brands: PropTypes.object,
};

export default Brand;
