import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-card-image group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{product.discount}%
            </div>
          )}
        </div>
        <div className="product-card-body">
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {Array(5).fill(0).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-xs text-gray-600">
              ({product.reviewCount})
            </span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center space-x-2">
                {product.originalPrice && product.originalPrice > product.price ? (
                  <>
                    <span className="text-lg font-bold text-primary-700">
                      {product.price}€
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}€
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-primary-700">
                    {product.price}€
                  </span>
                )}
              </div>
              {product.isPrime && (
                <span className="inline-block mt-1 text-xs font-medium text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                  Prime
                </span>
              )}
            </div>
            <div className="transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              <span className="text-accent-600 text-sm font-medium">
                Voir →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;