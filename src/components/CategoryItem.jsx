import { Link } from "react-router-dom";
import "../styles/categoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem_container">
      <Link to={`/product-overview/${item.category}`}>
        <img src={item.img} alt="item.img" className="categoryItem_img"/>
        <div className="categoryItem_info">
          <div className="categoryItem_title">{item.title}</div>
          <div className="categoryItem_button">BROWSE</div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
