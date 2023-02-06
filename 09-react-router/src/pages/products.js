import { Link } from 'react-router-dom';

const Products = () => {
	const PRODUCTS = [
		{ id: 'p1', title: 'Product 1' },
		{ id: 'p2', title: 'Product 2' },
		{ id: 'p3', title: 'Product 3' },
		{ id: 'p4', title: 'Product 4' },
	];
	return (
		<>
			<h1>Products Page</h1>
			<h3>Product List</h3>
			<ul>
				{PRODUCTS.map((product) => (
					<li key={product.id}>
						<Link to={`/products/${product.id}`}>{product.title}</Link>
					</li>
				))}
			</ul>
			<p>
				Go back to <Link to="/">Homepage</Link>.
			</p>
		</>
	);
};

export default Products;
