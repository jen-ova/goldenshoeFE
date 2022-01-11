import { popularProducts } from "../data";
import Product from "./Product";
import "../styles/products.css"

const Products = () => {
  
  return (
    <div>
      <div className="products_container">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;


