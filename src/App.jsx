import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="product/:category" element={<Product />} />
        <Route path="products" element={<Products />} />
        <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div className="bg-[#4C3A3A]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
