
import { useSelector } from 'react-redux';
import styles from './styles.module.css'
import StripeCheckout from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import { userRequest } from "src/pages/auth/userRequest/userRequest";
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from 'formik';

// const KEY = process.env.REACT_APP_STRIPE;

const KEY = "pk_test_51KrWBdIYAeGEmxb13Qc69p6uILixYHMXeo7IHXegL7VkYOvaYRFPFh8uWNM00rSja1xhOdkxQRsOH5ALR0OFKd7K001PcQlOxp";
const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken)

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("http://localhost:3001/success");
      } catch {
        
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <div>
      <div className={styles.wrapen}>
        <h1 className={styles.title}>Tu carrito</h1>
        <div className={styles.top}>
          <button className={styles.topButton} >Continuar explorando</button>
          <div className={styles.topTexts}>
            <span className={styles.topText}>Tu compra(2)</span>
            <span className={styles.topText}>Tus favoritos(0)</span>
          </div>
          <button className={styles.topButton} >Ir al Checkout</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
          {cart.products.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.productDetail}>
                <img className={styles.image} src={product.image} alt="" />
                <div className={styles.details}>
                  <span>
                    <b>Producto:</b> {product.title}
                  </span>
                  <span>
                    <b>Information:</b> {product.information}
                  </span>
                  <div className={styles.productColor} color={product.color} />
                  <span>
                    <b>Descripción:</b> {product.description}
                  </span>
                </div>
              </div>
              <div className={styles.priceDetail}>
                <div className={styles.productAmountContainer}>
                  {/* <Add /> */}
                  <div className={styles.productAmount}>Cantidad: {product.quantity}</div>
                  {/* <Remove /> */}
                </div>
                <div className={styles.productPrice}>
                  $ {product.price * product.quantity}
                </div>
              </div>
            </div>
          ))}
            <hr className={styles.hr} />

          </div>
          <div className={styles.summary}>
            <h1 className={styles.summaryTitle}>ORDER SUMMARY</h1>
            <div className={styles.summaryItem}>
              <span className={styles.summaryItemText}>Subtotal</span>
              <span>$ {cart.total}</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryItemText}>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className={styles.summaryItem}>
            <span className={styles.summaryItemText}>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className={styles.summaryItem} type="total">
              <span className={styles.summaryItemText}>Total</span>
              <span>$ {cart.total}</span>
            </div>
            <StripeCheckout
              name="FoodApp"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}              
            >
            <button className={styles.button}>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Checkout;



