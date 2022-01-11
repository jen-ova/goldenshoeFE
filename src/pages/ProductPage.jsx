import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { popularProducts } from "../data";
import NavbarTwo from "../components/NavbarTwo";
import "../styles/productPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import trainerW01 from "../images/trainer_W01.jpeg";
import trainerW02 from "../images/trainer_W02.jpeg";
import trainerW03 from "../images/trainer_W03.jpeg";
import trainerW04 from "../images/trainer_W04.jpeg";


const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <NavbarTwo />
      <div className="productpage_wrapper">
        <div className="productpage_imagecontainer">
          <img src={trainerW01} alt="" className="productpage_img"/>
          <img src={trainerW02} alt="" className="productpage_img"/>
          <img src={trainerW03} alt="" className="productpage_img"/>
          <img src={trainerW04} alt="" className="productpage_img"/>
        </div>
        <div className="productpage_infocontainer">
          <h1>{popularProducts[0].name}</h1>
          <h4>{popularProducts[0].category}</h4>
          <p>
            {popularProducts[0].description}
          </p>
            <div className="productpage_rating">
              <p>Reviews</p>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              </div>
            <p>
              Leave a review and receive 10% off your next purchase.
            </p>
          <div className="productpage_filtercontainer">
            <div className="productpage_filter">
              <div className="productpage_filtertitle">Size</div>
              <select className="productpage_filtersize">
                <option>38</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
              </select>
            </div>
          </div>
          <div className="productpage_price"> £{popularProducts[0].price}</div>
          <button>Add to basket</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
