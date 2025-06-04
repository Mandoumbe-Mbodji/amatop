import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp, Filter, Star } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  
  const category = categories.find(cat => cat.id === categoryId);
  
  useEffect(() => {
    let filtered = categoryId === 'all' 
      ? [...products]
      : products.filter(product => product.category === categoryId);
    
    // Apply filters
    filtered = filtered.filter(
      product => 
        product.price >= priceRange[0] && 
        product.price <= priceRange[1] &&
        product.rating >= minRating
    );
    
    // Apply sorting
    switch(sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      default: // featured or any other
        filtered.sort((a, b) => b.featured - a.featured);
    }
    
    setCategoryProducts(filtered);
  }, [categoryId, sortBy, priceRange, minRating]);
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {category ? category.name : 'Tous les produits'}
          </h1>
          <p className="text-gray-600">
            {categoryProducts.length} produits trouvés
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button 
              className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <span className="flex items-center font-medium">
                <Filter className="w-5 h-5 mr-2" />
                Filtres et tri
              </span>
              {filterOpen ? (
                <ArrowUp className="w-5 h-5" />
              ) : (
                <ArrowDown className="w-5 h-5" />
              )}
            </button>
          </div>
          
          {/* Filters - Sidebar */}
          <div className={`${filterOpen ? 'block' : 'hidden'} lg:block lg:w-64 space-y-6`}>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-lg mb-4">Trier par</h3>
              <div className="space-y-2">
                <button 
                  className={`w-full text-left px-3 py-2 rounded ${sortBy === 'featured' ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}
                  onClick={() => setSortBy('featured')}
                >
                  Pertinence
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded ${sortBy === 'price-asc' ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}
                  onClick={() => setSortBy('price-asc')}
                >
                  Prix croissant
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded ${sortBy === 'price-desc' ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}
                  onClick={() => setSortBy('price-desc')}
                >
                  Prix décroissant
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded ${sortBy === 'rating' ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}
                  onClick={() => setSortBy('rating')}
                >
                  Meilleures notes
                </button>
                <button 
                  className={`w-full text-left px-3 py-2 rounded ${sortBy === 'newest' ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}
                  onClick={() => setSortBy('newest')}
                >
                  Nouveautés
                </button>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-lg mb-4">Prix</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">{priceRange[0]}€</span>
                  <span className="text-sm text-gray-600">{priceRange[1]}€</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-primary-600"
                />
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-medium text-lg mb-4">Note minimum</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1, 0].map((rating) => (
                  <button
                    key={rating}
                    className={`w-full text-left px-3 py-2 rounded flex items-center ${minRating === rating ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'}`}
                    onClick={() => setMinRating(rating)}
                  >
                    <div className="flex mr-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm">& plus</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="flex-1">
            <ProductGrid 
              products={categoryProducts} 
              emptyMessage="Aucun produit trouvé dans cette catégorie avec les filtres actuels."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;