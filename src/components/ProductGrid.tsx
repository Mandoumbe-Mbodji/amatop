import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  title?: string;
  emptyMessage?: string;
}

const ProductGrid = ({ products, title, emptyMessage = "Aucun produit trouvé" }: ProductGridProps) => {
  return (
    <div>
      {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
      
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <p className="text-gray-500">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;