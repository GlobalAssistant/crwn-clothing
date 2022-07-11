import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState, Fragment } from 'react';

// import { CategoriesContext } from '../../context/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

import { useSelector } from 'react-redux/es/exports';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import './category.styles.scss';


const Category = () => {
    const {category} = useParams();
    // const {categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                
                {   products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    );

}

export default Category;