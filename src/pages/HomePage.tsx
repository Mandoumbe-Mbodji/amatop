import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const HomePage = () => {
  // Get discounted products
  const discountedProducts = products
    .filter(product => product.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 8);
  
  // Get bestsellers
  const bestSellers = [...products]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, 4);
  
  return (
    <>
      <HeroBanner />
      
      <FeaturedProducts />
      
      <CategorySection />
      
      <section className="py-12 bg-white">
        <div className="container-custom">
          <ProductGrid 
            products={discountedProducts} 
            title="Offres et Promotions" 
          />
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-6">Meilleures Ventes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <div key={product.id} className="flex">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700 font-bold mr-4">
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-primary-600 font-bold">
                    {product.price}€
                  </p>
                  <div className="mt-2">
                    <a 
                      href={`https://www.amazon.fr/dp/${product.id}?tag=amatop-21`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent-600 hover:underline flex items-center"
                    >
                      Voir sur Amazon
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;