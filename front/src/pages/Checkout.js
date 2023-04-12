import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="checkout-wrapper">
      <div className="title">
        <h2>View cart</h2>
      </div>

      <div className="view-cart_container">
        <div className="artwork-item-in_cart">
          <p>Artwork name 1 </p>
          <img className="img-placeholder" src="" alt="1" />
          <p>$0.00</p>
        </div>

        <div className="artwork-item-in_cart">
          <p>Artwork name 2 </p>
          <img className="img-placeholder" src="" alt="2" />
          <p>$0.00</p>
        </div>

        <div className="price-total_container">
          <h4>$00.00</h4>
        </div>
      </div>

      <div className="buttons_container">
        <button className="btn-primary checkout_button">Checkout </button>
        <button className="btn-outline">Continue Shopping</button>
      </div>
    </div>
    // End of checkout wrapper
  );
};

export default Checkout;
