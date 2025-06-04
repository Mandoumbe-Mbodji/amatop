import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mt-4 mb-2">Page introuvable</h2>
        <p className="text-gray-600 mb-6">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="btn-primary px-6 py-3"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;