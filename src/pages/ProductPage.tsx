import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductDetail from '../components/ProductDetail';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Product } from '../types';
import NotFoundPage from './NotFoundPage';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch product
    setLoading(true);
    
    // Find product by id
    const foundProduct = products.find(p => p.id === productId) || null;
    setProduct(foundProduct);
    
    // Get related products (same category)
    if (foundProduct) {
      const related = products
        .filter(p => 
          p.id !== foundProduct.id && 
          p.category === foundProduct.category
        )
        .slice(0, 4);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [productId]);
  
  // If product not found
  if (!loading && !product) {
    return <NotFoundPage />;
  }
  
  // Loading state
  if (loading) {
    return (
      <div className="container-custom py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-24 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-12">
          <ProductDetail product={product} />
        </div>
        
        {relatedProducts.length > 0 && (
          <div>
            <ProductGrid 
              products={relatedProducts} 
              title="Produits similaires" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;