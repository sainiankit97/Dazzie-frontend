import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './screens/dashboard';
import Analytics from './screens/analytics';
import Customers from './screens/customers';
import Product from './screens/product';
import Coupons from './screens/coupons';
import User from './screens/user';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/edit-product",
    element: <Product />,
  },
  {
    path: "/coupons",
    element: <Coupons />,
  },
  {
    path: "/user",
    element: <User />,
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
