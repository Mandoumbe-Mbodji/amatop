import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const featuredProducts = products.filter(product => product.rating >= 4.5);
  const totalPages = Math.ceil(featuredProducts.length / productsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const currentProducts = featuredProducts.slice(
    currentPage * productsPerPage, 
    (currentPage + 1) * productsPerPage
  );

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentPage]);
  
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Produits Recommandés</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevPage}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
              aria-label="Page précédente"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextPage}
              className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
              aria-label="Page suivante"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;