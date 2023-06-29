import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './screens/dashboard';
import Customers from './screens/customers';
import Product from './screens/product';
import Coupons from './screens/coupons';
import EmployeeShift from './screens/employee-shift';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
    path: "/employee-shift",
    element: <EmployeeShift />,
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
