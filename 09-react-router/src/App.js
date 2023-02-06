import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '/products', element: <Products /> },
			{ path: '/products/:productId', element: <ProductDetails /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
