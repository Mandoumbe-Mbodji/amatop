import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.id}`} className="category-card block p-4 transition-transform hover:-translate-y-1 duration-200">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center mb-3 text-primary-600">
          {category.icon}
        </div>
        <h3 className="font-medium text-gray-900">{category.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{category.productCount} produits</p>
      </div>
    </Link>
  );
};

export default CategoryCard;