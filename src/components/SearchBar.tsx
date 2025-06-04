import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof products>([]);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.length > 2) {
      // Search by title and description
      const filteredResults = products.filter(
        product => 
          product.title.toLowerCase().includes(value.toLowerCase()) || 
          product.description.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleSelectProduct = (productId: string) => {
    navigate(`/products/${productId}`);
    setQuery('');
    setResults([]);
    if (onClose) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      handleSelectProduct(results[0].id);
    }
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="flex items-center w-full">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={query}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          {query && (
            <button 
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="ml-2 btn-primary px-4 py-2"
        >
          Rechercher
        </button>
      </form>

      {/* Search Results */}
      {query.length > 2 && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-96 overflow-y-auto">
          {results.map(product => (
            <div 
              key={product.id}
              className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => handleSelectProduct(product.id)}
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-12 h-12 object-contain mr-3"
              />
              <div className="flex-grow">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-1">{product.price}€</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {query.length > 2 && results.length === 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg p-4 text-center">
          <p className="text-gray-500">Aucun résultat trouvé pour "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;