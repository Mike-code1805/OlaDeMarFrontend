import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fakeDataFeaturedOrders } from 'src/data';
import { addProduct } from 'src/redux/cartRedux';
import './styles.css';

const CardFeaturedOrders = ( { id, title, information, description, image, price} ) => {

	const dispatch = useDispatch();

	const [product, setProducts] = useState({id, title, information, description, image, price});
    const [quantity] = useState(1);

	const handleClick = () => {
        dispatch(
          addProduct({ ...product, quantity, price })
        );
    };
  return (
    <div id="container">	
	
	<div className="product-details">
		
	<h1> {title} </h1>
	<span className="hint-star star">
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star" aria-hidden="true"></i>
		<i className="fa fa-star-o" aria-hidden="true"></i>        
	</span>
		
			<p className="information"> {information} </p>
			<h2 className="information">S/. {price} </h2>
		
		
<div className="control">
	
	<button className="btn" onClick={handleClick}>
	<span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
    <span className="buy"> Comprar </span>
 </button>
	
</div>
			
</div>
	
<div className="product-image">
	
<img src={image} alt=""/>	

<div className="info">
	<h3> Descripción </h3>
	<ul>
		<li><strong> {description} </strong></li>		
	</ul>
</div>
</div>

</div>
  )
}


export default CardFeaturedOrders;