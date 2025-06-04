import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Découvrez les meilleurs produits Amazon
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 md:mb-8">
            Des sélections soigneusement choisies, des avis détaillés et des offres exclusives pour simplifier vos achats
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/categories/electronics" 
              className="btn bg-accent-500 hover:bg-accent-600 text-white px-6 py-3"
            >
              Explorer les produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="btn bg-white/10 hover:bg-white/20 text-white px-6 py-3"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;