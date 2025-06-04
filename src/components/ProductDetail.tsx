import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Shield,
  Truck,
  Award,
  ThumbsUp
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const [expandedDescription, setExpandedDescription] = useState(false);
  
  // Generate Amazon affiliate link (this would be replaced with your actual affiliate link)
  const affiliateLink = `https://www.amazon.fr/dp/${product.id}?tag=amatop-21`;
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Product Image */}
        <div className="p-6 flex items-center justify-center bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div className="p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-100">
          <div className="flex flex-col h-full">
            {/* Title and Rating */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              
              <div className="flex items-center mb-2">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product.reviewCount} avis)
                </span>
              </div>
              
              {product.category && (
                <Link
                  to={`/categories/${product.category}`}
                  className="text-sm text-primary-600 hover:underline"
                >
                  {product.categoryName}
                </Link>
              )}
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-primary-700">
                  {product.price}€
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      {product.originalPrice}€
                    </span>
                    <span className="text-sm font-medium text-accent-600 bg-accent-50 px-2 py-0.5 rounded">
                      Économisez {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
              
              {product.isPrime && (
                <div className="mt-2">
                  <span className="inline-block text-sm font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">
                    Amazon Prime
                  </span>
                </div>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <div className="relative">
                <div 
                  className={`prose max-w-none text-gray-700 ${
                    !expandedDescription && 'line-clamp-3'
                  }`}
                >
                  <p>{product.description}</p>
                </div>
                {product.description.length > 150 && (
                  <button
                    onClick={() => setExpandedDescription(!expandedDescription)}
                    className="mt-2 flex items-center text-primary-600 hover:text-primary-800 text-sm font-medium"
                  >
                    {expandedDescription ? (
                      <>
                        <span>Afficher moins</span>
                        <ChevronUp className="ml-1 w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>Afficher plus</span>
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-6">
              <h3 className="font-medium text-lg mb-3">Caractéristiques principales</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ThumbsUp className="w-5 h-5 text-primary-600 mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Truck className="w-5 h-5 text-primary-600 mr-2 shrink-0" />
                <span className="text-sm">Livraison rapide</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-primary-600 mr-2 shrink-0" />
                <span className="text-sm">Garantie {product.warranty || "fabricant"}</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <Award className="w-5 h-5 text-primary-600 mr-2 shrink-0" />
                <span className="text-sm">Produit vérifié</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-primary-600 mr-2 shrink-0" />
                <span className="text-sm">Retours sous 30j</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-auto">
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-accent-500 hover:bg-accent-600 text-white w-full flex items-center justify-center py-3 rounded-lg"
              >
                <span>Voir sur Amazon</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <p className="text-xs text-gray-500 text-center mt-2">
                *Les prix peuvent varier. Prix mis à jour le {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;