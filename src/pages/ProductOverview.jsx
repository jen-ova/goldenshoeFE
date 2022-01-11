import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import NavbarTwo from "../components/NavbarTwo";
import "../styles/productoverview.css";

const ProductOverview = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  return (
    <div className="productoverview_container">
      <Navbar />
      <NavbarTwo />
      <h1 className="productoverview_title">{category}</h1>
      <div className="productoverview_filtercontainer">
        <div className="productoverview_filter">
          <p className="productoverview_filtertext">Filter Products</p>
          <select name="color">
            <option disabled>Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
            <option>purple</option>
          </select>
          <select name="size">
            <option disabled>Size</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>41</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
            <option>45</option>
          </select>
        </div>
        <div className="productoverview_filter">
          <p className="productoverview_filtertext">Sort Products</p>
          <select>
            <option value="newest">Newest</option>
            <option value="ascending">Price (ascending)</option>
            <option value="descending">Price (descending)</option>
          </select>
        </div>
      </div>
      <Products cat={category}/>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductOverview;
