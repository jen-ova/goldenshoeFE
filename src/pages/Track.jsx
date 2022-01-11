import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import NavbarTwo from "../components/NavbarTwo";
import "../styles/track.css";


const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <NavbarTwo />
      <div className="track_wrapper">
        <div class="track-block">
            <h1>Track my order</h1>
            <p>You can track the progress of orders placed online by entering your details into the form below. You will find these in your confirmation email. </p>
            <input type="text" value="" placeholder="Order number" id="ordernumber" />
            <input type="password" value="" placeholder="Email" id="email" />
            <button>Track Order</button>
            </div>
        </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
