import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "../pages/landing";
import AboutUsPage from "../pages/about-us/about-us.page";
import AllProductGridPage from "../pages/allProducts/all-products.page";
import HomePageLayout from "../pages/Layout/home-layout.page";
import UserLayoutPage from "../pages/Layout/user-layout.page";
import AdminDashboardPage from "../pages/dashboard/admin-dashboard.page";
import CategorywiseProductList from "../pages/category/category-product-list.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "products",
        element: <AllProductGridPage />,
      },
      {
        path: "category/:slug",
        element: <CategorywiseProductList />,
      },
      {
        path: "*",
        element: <>Error page</>,
      },
    ],
  },
  {
    path: "/admin",
    element: <UserLayoutPage role="admin" />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
    ],
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

// const Routing = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LandingPage />}></Route>
//           <Route path="/about-us" element={<AboutUsPage />}></Route>
//           <Route path="/products" element={<AllProductGridPage />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };
export default Routing;
