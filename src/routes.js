import {ADMIN_ROUTE,LOGIN_ROUTE,REGISTRATION_ROUTE,SHOP_ROUTE,DEVICE_ROUTE,BASKET_ROUTE} from './utils/constants.js';
import AuthPage from './pages/authPage.js';
import {BasketPage} from './pages/basketPage.js';
import ShopPage from './pages/shopPage.js';
import DevicePage from './pages/devicePage.js';
import {AdminPage} from './pages/adminPage.js';
import React from 'react';

export const authRoutes =[
{element: <AdminPage/>, path: ADMIN_ROUTE},
{element: <BasketPage/>, path: BASKET_ROUTE},
];
export const publicRoutes =[
{element: <ShopPage/>, path: SHOP_ROUTE},
{element: <AuthPage/>, path: REGISTRATION_ROUTE},
{element: <AuthPage/>, path: LOGIN_ROUTE},
{element: <DevicePage/>, path: DEVICE_ROUTE + '/:id'},
];
