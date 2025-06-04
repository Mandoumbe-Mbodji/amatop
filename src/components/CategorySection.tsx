import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import CategoryCard from './CategoryCard';

const CategorySection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Parcourez par catégorie
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les produits les plus populaires dans nos catégories soigneusement sélectionnées
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/categories/all" 
            className="btn-outline px-6 py-2"
          >
            Voir toutes les catégories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;