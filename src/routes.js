import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CategoryPage from "./pages/CategoryPage";
import MaterialsCategoryPage from "./pages/MaterialsCategoryPage";
import AddProductPage from "./pages/AddProductPage";
import TurnkeyConstructionCategoryPage from "./pages/TurnkeyConstructionCategoryPage";
import FavoritesPage from "./pages/FavoritesPage";
import PersonalAccountPage from "./pages/PersonalAccountPage";
import CartPage from "./pages/CartPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route
                        exact
                        path="/"
                        element={<WelcomePage/>}
                    />
                    <Route
                        path="/login"
                        element={<LoginPage/>}
                    />
                    <Route
                        path="/register"
                        element={<SignUpPage/>}
                    />
                    <Route
                        path="/categoryPage"
                        element={<CategoryPage/>}
                    />
                    <Route
                        path="/turnkeyConstructionsPage"
                        element={<TurnkeyConstructionCategoryPage/>}
                    />
                    <Route
                        path="/repairWorksPage"
                        element={<MaterialsCategoryPage/>}
                    />
                    <Route
                        path="/addProduct"
                        element={<AddProductPage/>}
                    />
                    <Route
                        path="/cartPage"
                        element={<CartPage/>}
                    />
                    <Route
                        path="/favoritesPage"
                        element={<FavoritesPage/>}
                    />
                    <Route
                        path="/welcomePage"
                        element={<WelcomePage/>}
                    />
                    <Route
                        path="/personalAccountPage"
                        element={<PersonalAccountPage/>}
                    />
            </Routes>
        </BrowserRouter>
    );
}

export default Router
