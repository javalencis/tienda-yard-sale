import { useContext } from 'react';
import iconFlechita from '../assets/icons/flechita.svg'

import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';

const sumTotal = (cart) => {
	const reducer  = (accumalator, currentValue) =>{
		return accumalator + currentValue.price;
	}
	const sum = cart.reduce(reducer,0);
	return sum; 
}



const MyOrder = () => {

	const {state} = useContext(AppContext);

	

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={iconFlechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">

				{
					state.cart.map(product => (
						<OrderItem key={`orderItem-${product.id}`} product={product}/>
					))
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal(state.cart)}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
