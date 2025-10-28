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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
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
