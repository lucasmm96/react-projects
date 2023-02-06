import { Link,useParams } from 'react-router-dom';

const ProductDetails = () => {
	const param = useParams();
	
	return (
		<>
			<h1>Product Detail</h1>
			<p>Product Id: {param.productId}</p>
			<p>
				Go back to <Link to="/">Homepage</Link>.
			</p>
		</>
	);
};

export default ProductDetails;
