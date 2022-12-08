import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import BuyerLayout from '../layout/BuyerLayout'
import MainLayoutRoutes from '../layout/MainLayout.routes'
import SellerLayout from '../layout/SellerLayout'
import AllCategory from '../page/AdminDashbord/AllCategory'
import AllLaptops from '../page/AdminDashbord/AllLaptops'
import AllSellers from '../page/AdminDashbord/AllSellers'
import AllUsers from '../page/AdminDashbord/AllUsers'
import RepotedItems from '../page/AdminDashbord/RepotedItems'
import BlogPage from '../page/BlogPage/BlogPage'
import MyOrders from '../page/BuyerDashboard/MyOrders'
import MyWishList from '../page/BuyerDashboard/MyWishList'
import Home from '../page/home/Home'
import Login from '../page/Login/Login'
import Registration from '../page/Login/Registration'
import PageNotFound from '../page/not-found/PageNotFound'
import ProductDetails from '../page/ProductDetails/ProductDetails'
import AddLaptop from '../page/SellerDashboard/AddLaptop'
import MyBuyer from '../page/SellerDashboard/MyBuyer'
import YourLaptop from '../page/SellerDashboard/YourLaptop'
import ShopPage from '../page/shopPage/ShopPage'
import User from '../page/UserDashbord/User'
import AdminPrivetRoute from './AdminPrivetRoute'
import LoginRegPrivetForUser from './LoginRegPrivetForUser'
import OnlyUserPrivetRoute from './OnlyUserPrivetRoute'
import SellerPrivetRoute from './SellerPrivetRoute'
import UserPrivateRoutes from './UserPrivateRoutes'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayoutRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          <LoginRegPrivetForUser>
            <Login />
          </LoginRegPrivetForUser>
        ),
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/registration',
        element: (
          <LoginRegPrivetForUser>
            <Registration />,
          </LoginRegPrivetForUser>
        ),
      },
      {
        path: '/profile',
        element: (
          <UserPrivateRoutes>
            <User />
          </UserPrivateRoutes>
        ),
      },
      {
        path: '/shop',
        element: <ShopPage />,
      },
      {
        path: '/shop/category-details/:_id',
        element: (
          <UserPrivateRoutes>
            <ProductDetails />
          </UserPrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://watch-house.vercel.app/product-category-by-id/v1/${params._id}`,
          ),
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
  {
    path: '/admin-dashboard',
    element: (
      <AdminPrivetRoute>
        <AdminLayout />
      </AdminPrivetRoute>
    ),
    children: [
      {
        path: 'all-category',
        element: <AllCategory />,
      },
      {
        path: 'all-users',
        element: <AllUsers />,
      },
      {
        path: 'all-sellers',
        element: <AllSellers />,
      },
      {
        path: 'all-watches',
        element: <AllLaptops />,
      },
      {
        path: 'reported-items',
        element: <RepotedItems />,
      },
    ],
  },
  {
    path: '/seller-dahboard',
    element: (
      <SellerPrivetRoute>
        <SellerLayout />
      </SellerPrivetRoute>
    ),
    children: [
      {
        path: 'your-watches',
        element: <YourLaptop />,
      },
      {
        path: 'add-watches',
        element: <AddLaptop />,
      },
      {
        path: 'my-buyer',
        element: <MyBuyer />,
      },
    ],
  },
  {
    path: '/buyer-dashboard',
    element: (
      <OnlyUserPrivetRoute>
        <BuyerLayout />
      </OnlyUserPrivetRoute>
    ),
    children: [
      {
        path: 'my-orders',
        element: <MyOrders />,
      },
      {
        path: 'my-wishlists',
        element: <MyWishList />,
      },
    ],
  },
])

export default routes
