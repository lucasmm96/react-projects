import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<>
			<h1>Products Page</h1>
			<h3>Product List</h3>
			<ul>
				<li>Product 01</li>
				<li>Product 02</li>
				<li>Product 03</li>
				<li>Product 04</li>
			</ul>
			<p>
				Go back to <Link to="/">Homepage</Link>.
			</p>
		</>
	);
};

export default Products;
