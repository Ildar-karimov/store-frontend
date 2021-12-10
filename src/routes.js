import RegistrationPage from "./pages/RegistrationPage";
import {
    CURRENT_PRODUCT_ROUTE,
    LOGIN_ROUTE,
    NOT_FOUND_ROUTE,
    PRODUCTS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/const-routes";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";

export const authRoutes = [
    {}
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: <RegistrationPage/>,
    },
    {
        path: LOGIN_ROUTE,
        Component: <LoginPage/>,
    },
    {
        path: PRODUCTS_ROUTE,
        Component: <ProductsPage/>,
    },
    {
        path: CURRENT_PRODUCT_ROUTE + '/:id',
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: <ProductsPage/>
    }
]