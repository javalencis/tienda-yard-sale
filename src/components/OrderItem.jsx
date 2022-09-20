import { useContext } from 'react';
import iconClose from '../assets/icons/icon_close.png'
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img onClick={()=>removeFromCart(product)} src={iconClose} alt="close" />
		</div>
	);
}

export default OrderItem;
