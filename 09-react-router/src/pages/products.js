import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<>
			<h1>Products Page</h1>
			<p>
				Go back to <Link to="/">Homepage</Link>.
			</p>
		</>
	);
};

export default Products;
