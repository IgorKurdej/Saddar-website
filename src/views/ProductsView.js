import React from 'react';
import LogoBar from "../components/LogoBar/LogoBar";
import NavBar from "../components/NavBar/NavBar";
import Products from "../components/Products/Products";

const ProductsView = () => {
    return (
        <>
            <LogoBar />
            <NavBar />
            <Products />
        </>
    );
};

export default ProductsView;