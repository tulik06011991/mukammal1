import React, { useState } from "react";
import productContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <productContext.Provider value={{ products, setProducts, isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </productContext.Provider>
    );
}

export default ProductContextProvider;
