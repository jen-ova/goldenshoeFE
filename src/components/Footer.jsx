import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div>
      <div className="footer_title">Need help?</div>
        <ul>
          <li>Help</li>
          <li>Track Order</li>
          <li>Delivery Info</li>
          <li>Returns Policy</li>
          <li>Student Discount</li>
        </ul>
      </div>
      <div>
      <div className="footer_title">Useful Links</div>
      <ul>
          <li>Social Code of Conduct</li>
          <li>Find our Store</li>
          <li>Jobs at Golden Shoe</li>
          <li>Account Log-in</li>
          <li>Giftcards</li>
        </ul>
      </div>
      <div>
      <div className="footer_title">Follow Us</div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>YouTube</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
