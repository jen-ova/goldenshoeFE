import { categories } from '../data';
import CategoryItem from "./CategoryItem";
import "../styles/categories.css";

const Categories = () => {
    return (
      <div className="categories_container">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    );
  };
  

export default Categories
