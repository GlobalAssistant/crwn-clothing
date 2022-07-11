// Temporary Data --- will come from the backend
// import SHOP_DATA from '../../shopdata.json';
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

// Redux - context
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";

import "./shop.styles.scss";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCategoriesMap() { 
        const categoryMap = await getCategoriesAndDocuments('categories');

        dispatch(setCategoriesMap(categoryMap));
    }
    getCategoriesMap();
  }, []);
  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
