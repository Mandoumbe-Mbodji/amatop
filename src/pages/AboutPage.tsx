import { ExternalLink, Heart, Info } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">À propos d'AmaTop</h1>
            <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          </div>
          
          <div className="prose max-w-none">
            <h2>Notre Mission</h2>
            <p>
              Bienvenue sur AmaTop, votre guide de confiance pour découvrir les meilleurs produits disponibles sur Amazon. Notre mission est simple : vous aider à trouver les produits les plus populaires et les mieux notés sans avoir à passer des heures à parcourir des milliers de références.
            </p>
            
            <h2>Ce que nous faisons</h2>
            <p>
              Chaque jour, nous analysons les meilleures ventes d'Amazon pour vous présenter uniquement les produits qui valent vraiment le coup. Notre équipe d'experts examine attentivement les commentaires, les notes et les spécifications pour vous offrir une sélection pertinente et fiable.
            </p>
            
            <h2>Comment ça marche</h2>
            <p>
              Lorsque vous visitez notre site, vous pouvez parcourir nos sélections par catégorie, consulter les détails des produits et lire nos résumés d'avis. Si un produit vous intéresse, il vous suffit de cliquer sur le lien pour être redirigé vers Amazon où vous pourrez finaliser votre achat en toute sécurité.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-6">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-primary-600 mt-0.5 mr-3 shrink-0" />
                <p className="text-sm text-gray-700">
                  <strong>Remarque sur les liens d'affiliation :</strong> AmaTop est participant au Programme Partenaires d'Amazon, un programme d'affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la création de liens vers Amazon.fr. Lorsque vous effectuez un achat via nos liens, nous recevons une petite commission, sans frais supplémentaires pour vous.
                </p>
              </div>
            </div>
            
            <h2>Notre engagement</h2>
            <p>
              Nous nous engageons à :
            </p>
            <ul>
              <li>Présenter uniquement des produits de qualité, populaires et bien notés</li>
              <li>Mettre à jour régulièrement nos sélections pour refléter les tendances actuelles</li>
              <li>Fournir des informations précises et utiles sur chaque produit</li>
              <li>Respecter votre vie privée et vos données personnelles</li>
            </ul>
            
            <h2>Contactez-nous</h2>
            <p>
              Si vous avez des questions, des suggestions ou des commentaires, n'hésitez pas à nous contacter à l'adresse suivante : contact@amatop.com
            </p>
            
            <div className="text-center mt-8">
              <p className="flex items-center justify-center text-gray-600">
                Créé avec <Heart className="mx-1 h-4 w-4 text-accent-500" /> en France
              </p>
              <a 
                href="https://affiliate-program.amazon.fr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800 mt-2"
              >
                En savoir plus sur le programme d'affiliation Amazon
                <ExternalLink className="ml-1 w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;