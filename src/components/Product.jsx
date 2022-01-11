import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import "../styles/product.css";

const Product = ({ item }) => {

  return (
    <div className="product_container">
    <Link to="/product-page/:id">
      <img src={item.img} alt="item.img" className="product_img"/>
      <div className="product_info">
      <div className="product_icon"><FontAwesomeIcon icon={faSearch} />{" "}</div>
      </div>
    </Link>
  </div>
  );
};

export default Product;


