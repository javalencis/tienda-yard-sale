import iconClose from '../assets/icons/icon_close.svg'
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={iconClose} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
