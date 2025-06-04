import { Link } from 'react-router-dom';
import { ExternalLink, Heart, Info, Mail, ShoppingCart } from 'lucide-react';
import { categories } from '../data/categories';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingCart className="w-6 h-6 text-primary-400" />
              <span className="text-xl font-bold text-white">AmaTop</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Votre guide des meilleures ventes sur Amazon. Trouvez les produits les plus populaires avec des liens d'achat directs.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Ce site utilise des liens d'affiliation</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Catégories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/categories/${category.id}`}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Information</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start">
                <Info className="w-5 h-5 mr-2 shrink-0 text-primary-400" />
                <span>
                  AmaTop est un participant au programme d'affiliation d'Amazon, conçu pour fournir un moyen de gagner des frais en faisant des liens vers Amazon.fr
                </span>
              </p>
              <p className="flex items-start">
                <Mail className="w-5 h-5 mr-2 shrink-0 text-primary-400" />
                <span>
                  contact@amatop.com
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© {currentYear} AmaTop. Tous droits réservés.</p>
          <p className="text-sm text-gray-500 flex items-center mt-2 md:mt-0">
            Créé avec <Heart className="h-3 w-3 mx-1 text-accent-500" /> en France
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;