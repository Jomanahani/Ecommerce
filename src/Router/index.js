import { lazy } from 'react';

// pages
const Home = lazy(() => import('../Pages/Home'));
const SelectedItems = lazy(() => import('../Pages/SelectedItems'));
const Electronics = lazy(() => import('../Pages/Electronics'));
const Item = lazy(() => import('../Pages/Item'));
const Cart = lazy(() => import('../Pages/Cart'));

export const PATHS = {
    HOME: '/',
    SELECTEDITEMS:'/SelectedItems',
    ELECTRONICS:'/Electronics',
    ITEM:'/Item',
    CART: '/Cart',
  };

export const router =[
    { index: true, element: <Home title={'Home Page'} /> },
    {  path: PATHS.SELECTEDITEMS, element: <SelectedItems />  },
    {  path: PATHS.ELECTRONICS, element: <Electronics /> } ,
    { path: PATHS.ITEM, element: <Item /> },
    { path: PATHS.CART, element: <Cart /> },

    { path: '*', element: <h1>page not found 404</h1> },
]