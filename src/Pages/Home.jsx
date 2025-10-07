import React from 'react';
import { Link} from 'react-router';
import ProductCard from '../Componets/ProductCard';
import useProducts from '../Hooks/useProducts';

const Home = () => {
    const { products, loading, error } = useProducts();
    const featureProducts = products.slice(0,6)
    // console.log(products)
 
    return (
      <div>
        <div className="flex justify-between py-5 items-center">
          <h1 className="text-3xl font-semibold">Featured Products</h1>
          <Link className="btn btn-outline" to="/products">
            See All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Home;