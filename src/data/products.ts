import { Product } from '../types';

export const products: Product[] = [
  // Electronics
  {
    id: 'B08L5TNJHG',
    title: 'Apple iPhone 13, 128Go, Minuit (Reconditionné)',
    description: 'L\'iPhone 13 est doté d\'un écran Super Retina XDR de 6,1 pouces, de la puce A15 Bionic pour des performances exceptionnelles et d\'un système photo avancé avec mode Cinématique pour vos vidéos. Sa batterie offre jusqu\'à 19 heures de lecture vidéo et il résiste à l\'eau jusqu\'à 6 mètres pendant 30 minutes.',
    price: 599.99,
    originalPrice: 769.99,
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    categoryName: 'Électronique',
    rating: 4.7,
    reviewCount: 8234,
    discount: 22,
    isPrime: true,
    features: [
      'Écran Super Retina XDR 6,1"',
      'Puce A15 Bionic',
      'Mode Cinématique pour les vidéos',
      'Autonomie exceptionnelle',
      'Compatible 5G'
    ],
    warranty: '1 an',
    date: '2023-09-15',
    featured: 9
  },
  {
    id: 'B07PZR3PVB',
    title: 'Sony WH-1000XM4 - Casque Bluetooth à réduction de bruit',
    description: 'Le casque sans fil WH-1000XM4 offre une qualité audio exceptionnelle avec réduction de bruit leader de l\'industrie. Il dispose d\'une autonomie de 30 heures, de la fonction Speak-to-Chat qui met automatiquement en pause la musique lorsque vous parlez, et de la connexion multipoint pour connecter deux appareils simultanément.',
    price: 299.99,
    originalPrice: 379.99,
    image: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    categoryName: 'Électronique',
    rating: 4.8,
    reviewCount: 5621,
    discount: 21,
    isPrime: true,
    features: [
      'Réduction de bruit numérique leader du marché',
      'Autonomie jusqu\'à 30 heures',
      'Connexion multipoint (2 appareils)',
      'Fonction Speak-to-Chat',
      'Audio haute résolution'
    ],
    warranty: '2 ans',
    date: '2023-07-20',
    featured: 8
  },
  
  // Computers
  {
    id: 'B09JQK9DK5',
    title: 'Apple MacBook Pro 14" (2023), Puce M2 Pro, 16Go RAM, SSD 512Go',
    description: 'Le MacBook Pro 14 pouces avec la puce M2 Pro repousse les limites de ce qu\'un ordinateur portable peut faire. Avec sa puissance de traitement exceptionnelle, son écran Liquid Retina XDR époustouflant et sa batterie qui dure jusqu\'à 18 heures, c\'est le compagnon idéal des professionnels les plus exigeants.',
    price: 1999.99,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'computers',
    categoryName: 'Informatique',
    rating: 4.9,
    reviewCount: 2341,
    discount: 0,
    isPrime: true,
    features: [
      'Puce Apple M2 Pro',
      'Écran Liquid Retina XDR 14"',
      '16Go de RAM unifiée',
      'SSD de 512Go',
      'Autonomie jusqu\'à 18 heures'
    ],
    warranty: '1 an',
    date: '2023-10-22',
    featured: 10
  },
  {
    id: 'B08GGGCH6S',
    title: 'ASUS ROG Strix G15 - PC Portable Gaming 15.6"',
    description: 'Ce PC portable gaming offre des performances exceptionnelles grâce à son processeur AMD Ryzen 7, sa carte graphique NVIDIA GeForce RTX 3060 et ses 16 Go de RAM. Son écran 165Hz garantit une fluidité impeccable et son système de refroidissement intelligent optimise les performances pendant les sessions de jeu intenses.',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'computers',
    categoryName: 'Informatique',
    rating: 4.6,
    reviewCount: 1876,
    discount: 13,
    isPrime: true,
    features: [
      'Processeur AMD Ryzen 7',
      'NVIDIA GeForce RTX 3060',
      'Écran 15.6" FHD 165Hz',
      '16Go RAM, 1To SSD',
      'Système de refroidissement ROG Intelligent'
    ],
    warranty: '2 ans',
    date: '2023-08-10',
    featured: 7
  },
  
  // Home
  {
    id: 'B07WSD5ZG1',
    title: 'Dyson V11 Absolute - Aspirateur balai sans fil',
    description: 'Le Dyson V11 Absolute est l\'aspirateur balai le plus intelligent et le plus puissant de Dyson. Il s\'adapte automatiquement à différents types de sols pour un nettoyage optimal et dispose d\'un écran LCD qui affiche l\'autonomie restante et les performances en temps réel. Sa batterie offre jusqu\'à 60 minutes d\'aspiration puissante.',
    price: 549.99,
    originalPrice: 699.99,
    image: 'https://images.pexels.com/photos/4107274/pexels-photo-4107274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'home',
    categoryName: 'Maison',
    rating: 4.7,
    reviewCount: 4231,
    discount: 21,
    isPrime: true,
    features: [
      'Moteur numérique Dyson V11',
      'Jusqu\'à 60 minutes d\'autonomie',
      'Écran LCD intégré',
      'Adaptation intelligente selon le sol',
      'Système de filtration avancé'
    ],
    warranty: '2 ans',
    date: '2023-06-05',
    featured: 8
  },
  {
    id: 'B089LFZPWH',
    title: 'Philips Hue White and Color Ambiance - Pack de 3 ampoules LED',
    description: 'Ce pack de 3 ampoules connectées Philips Hue vous permet de créer l\'ambiance parfaite dans votre maison avec 16 millions de couleurs et différentes nuances de blanc. Contrôlez-les via l\'application, votre voix (compatible avec Alexa, Google Assistant et Apple HomeKit) ou les interrupteurs Hue.',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'home',
    categoryName: 'Maison',
    rating: 4.6,
    reviewCount: 3542,
    discount: 23,
    isPrime: true,
    features: [
      '16 millions de couleurs et nuances de blanc',
      'Contrôle via application ou assistants vocaux',
      'Installation facile',
      'Durée de vie de 25 000 heures',
      'Économie d\'énergie (classe A+)'
    ],
    warranty: '2 ans',
    date: '2023-05-18',
    featured: 7
  },
  
  // Kitchen
  {
    id: 'B08J412Q2Y',
    title: 'Ninja Foodi MAX - Multicuiseur intelligent 9-en-1',
    description: 'Le Ninja Foodi MAX est un multicuiseur 9-en-1 qui combine un autocuiseur, une friteuse sans huile, un four, un gril et bien plus encore. Sa grande capacité de 7,5L permet de cuisiner pour toute la famille et sa technologie TenderCrisp assure des aliments tendres à l\'intérieur et croustillants à l\'extérieur.',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/6996084/pexels-photo-6996084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kitchen',
    categoryName: 'Cuisine',
    rating: 4.8,
    reviewCount: 2876,
    discount: 17,
    isPrime: true,
    features: [
      '9 fonctions de cuisson en un seul appareil',
      'Capacité de 7,5L (jusqu\'à 8 personnes)',
      'Technologie TenderCrisp',
      'Cuisson jusqu\'à 70% plus rapide',
      'Couvercle de gril pour finition croustillante'
    ],
    warranty: '2 ans',
    date: '2023-09-30',
    featured: 8
  },
  {
    id: 'B079QHMFWC',
    title: 'De\'Longhi Magnifica S - Machine à café automatique',
    description: 'La De\'Longhi Magnifica S est une machine à café automatique avec broyeur qui vous permet de préparer de délicieux expressos, cafés longs ou cappuccinos à partir de grains fraîchement moulus. Son panneau de commande intuitif et sa buse vapeur vous permettent de personnaliser chaque boisson selon vos préférences.',
    price: 329.99,
    originalPrice: 449.99,
    image: 'https://images.pexels.com/photos/6205791/pexels-photo-6205791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'kitchen',
    categoryName: 'Cuisine',
    rating: 4.5,
    reviewCount: 4521,
    discount: 27,
    isPrime: true,
    features: [
      'Broyeur intégré à grains',
      'Personnalisation de l\'intensité et de la longueur du café',
      'Buse vapeur pour mousser le lait',
      'Système de chauffe rapide',
      'Entretien facile'
    ],
    warranty: '2 ans',
    date: '2023-04-10',
    featured: 7
  },
  
  // Fashion
  {
    id: 'B07XJSPQLF',
    title: 'Levi\'s 501 Original Fit - Jean homme',
    description: 'Le jean Levi\'s 501 Original est une véritable icône du style américain depuis 1873. Avec sa coupe droite intemporelle, sa braguette à boutons et son denim de qualité supérieure, il offre un confort durable et un look authentique qui ne se démode jamais.',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'fashion',
    categoryName: 'Mode',
    rating: 4.6,
    reviewCount: 8752,
    discount: 20,
    isPrime: true,
    features: [
      'Coupe originale droite iconique',
      'Denim 100% coton de qualité',
      'Braguette à boutons',
      'Fabriqué pour durer',
      'Disponible en plusieurs teintes'
    ],
    warranty: 'Garantie satisfaction',
    date: '2023-03-15',
    featured: 6
  },
  
  // Baby
  {
    id: 'B07GRZCVHY',
    title: 'Babybjorn Transat Balance Soft - Transat bébé ergonomique',
    description: 'Le transat Babybjorn Balance Soft est conçu pour offrir un soutien optimal à votre bébé, de la naissance jusqu\'à 2 ans. Son design ergonomique distribue uniformément le poids et procure un confort idéal. Il se balance naturellement sans piles ni batteries et se plie à plat pour un rangement facile.',
    price: 149.99,
    originalPrice: 189.99,
    image: 'https://images.pexels.com/photos/5827/fashion-shoes-leather-luxury.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'baby',
    categoryName: 'Bébé',
    rating: 4.8,
    reviewCount: 1956,
    discount: 21,
    isPrime: true,
    features: [
      'Conception ergonomique',
      'Utilisable de la naissance à 2 ans',
      'Balancement naturel sans piles',
      'Pliable pour un rangement facile',
      'Housse lavable en machine'
    ],
    warranty: '2 ans',
    date: '2023-08-22',
    featured: 7
  },
  
  // Sports
  {
    id: 'B07ZRTCTTS',
    title: 'Garmin Forerunner 245 - Montre GPS de course à pied',
    description: 'La Garmin Forerunner 245 est une montre GPS avancée pour les coureurs qui souhaitent améliorer leurs performances. Elle mesure la VO2 max, fournit des plans d\'entraînement adaptatifs et analyse votre technique de course. Son autonomie de 7 jours en mode montre et 24 heures en mode GPS vous accompagne lors de vos sessions d\'entraînement.',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sports',
    categoryName: 'Sports',
    rating: 4.7,
    reviewCount: 3421,
    discount: 17,
    isPrime: true,
    features: [
      'GPS intégré haute précision',
      'Mesure VO2 max et analyse physiologique',
      'Plans d\'entraînement adaptatifs Garmin Coach',
      'Autonomie de 7 jours (24h en mode GPS)',
      'Notifications intelligentes'
    ],
    warranty: '2 ans',
    date: '2023-07-08',
    featured: 7
  },
  
  // Books
  {
    id: 'B09MQWBVKZ',
    title: 'Là où chantent les écrevisses - Delia Owens',
    description: 'Best-seller international, ce roman captivant raconte l\'histoire de Kya, une jeune fille abandonnée qui a grandi seule dans les marais de Caroline du Nord dans les années 1950. Quand un jeune homme de la ville est retrouvé mort, Kya devient la principale suspecte. Un récit poignant qui mêle mystère, coming-of-age et ode à la nature.',
    price: 19.99,
    originalPrice: 22.99,
    image: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'books',
    categoryName: 'Livres',
    rating: 4.8,
    reviewCount: 9876,
    discount: 13,
    isPrime: true,
    features: [
      'Best-seller international',
      'Roman poignant mêlant mystère et émotion',
      'Plus de 12 millions d\'exemplaires vendus',
      'Adapté au cinéma',
      'Prix Goodreads Choice Awards'
    ],
    date: '2023-02-28',
    featured: 6
  },
  
  // Toys
  {
    id: 'B07WY5XFDX',
    title: 'LEGO Star Wars - Le Mandalorien et l\'Enfant',
    description: 'Ce set LEGO Star Wars comprend 2 personnages iconiques de la série "The Mandalorian". Construisez le Mandalorien avec son blaster et son jetpack, ainsi que Baby Yoda (l\'Enfant) dans son berceau flottant. Un must-have pour les fans de Star Wars et les collectionneurs.',
    price: 19.99,
    originalPrice: 24.99,
    image: 'https://images.pexels.com/photos/2249290/pexels-photo-2249290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'toys',
    categoryName: 'Jeux & Jouets',
    rating: 4.9,
    reviewCount: 2154,
    discount: 20,
    isPrime: true,
    features: [
      '295 pièces',
      'Figurines du Mandalorien et de Baby Yoda',
      'Berceau flottant pour l\'Enfant',
      'Compatible avec tous les sets LEGO Star Wars',
      'Idéal pour les fans de 10 ans et plus'
    ],
    date: '2023-10-05',
    featured: 7
  },
  
  // DIY
  {
    id: 'B09CNRL9FT',
    title: 'Bosch Professional GSB 18V-55 - Perceuse à percussion sans fil',
    description: 'Cette perceuse-visseuse à percussion sans fil Bosch Professional offre une puissance impressionnante dans un format compact. Avec son couple de 55 Nm, elle vient à bout des matériaux les plus durs. Sa batterie 18V et sa technologie ProCORE permettent une utilisation prolongée sans perte de performance.',
    price: 139.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'diy',
    categoryName: 'Bricolage',
    rating: 4.7,
    reviewCount: 1876,
    discount: 22,
    isPrime: true,
    features: [
      'Moteur brushless haute performance',
      'Couple de 55 Nm',
      'Batterie 18V ProCORE',
      '2 vitesses et 20 positions de couple',
      'Éclairage LED intégré'
    ],
    warranty: '3 ans',
    date: '2023-06-12',
    featured: 6
  },
  
  // Auto
  {
    id: 'B08GM96HDZ',
    title: 'NORAUTO Batterie de voiture N50 12V 50Ah 420A',
    description: 'Cette batterie NORAUTO N50 assure des démarrages fiables pour votre véhicule, même par temps froid. Avec une capacité de 50Ah et un courant de démarrage de 420A, elle convient à la plupart des voitures de tourisme et petits utilitaires. Sans entretien et résistante aux vibrations, elle offre une durée de vie prolongée.',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/11429353/pexels-photo-11429353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'auto',
    categoryName: 'Auto & Moto',
    rating: 4.5,
    reviewCount: 932,
    discount: 20,
    isPrime: true,
    features: [
      'Capacité: 50Ah',
      'Courant de démarrage: 420A',
      'Sans entretien',
      'Résistante aux vibrations',
      'Compatible avec de nombreux véhicules'
    ],
    warranty: '3 ans',
    date: '2023-05-25',
    featured: 5
  },
  
  // More Electronics
  {
    id: 'B08V3B4QC8',
    title: 'Samsung Galaxy Tab S7 FE - Tablette 12.4"',
    description: 'La Samsung Galaxy Tab S7 FE combine un grand écran immersif de 12,4 pouces, un S Pen inclus et une batterie longue durée pour une productivité et un divertissement optimal. Parfaite pour prendre des notes, dessiner ou regarder vos séries préférées avec un son Dolby Atmos immersif.',
    price: 449.99,
    originalPrice: 599.99,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'electronics',
    categoryName: 'Électronique',
    rating: 4.6,
    reviewCount: 1487,
    discount: 25,
    isPrime: true,
    features: [
      'Écran 12.4" TFT LCD',
      'S Pen inclus',
      'Batterie 10,090mAh',
      'Son Dolby Atmos',
      'Samsung DeX pour productivité'
    ],
    warranty: '2 ans',
    date: '2023-08-14',
    featured: 7
  },
  
  // More Home
  {
    id: 'B0842YL6FX',
    title: 'iRobot Roomba i7+ - Robot aspirateur avec base d\'auto-vidage',
    description: 'Le Roomba i7+ est un robot aspirateur intelligent qui combine une puissante aspiration et la capacité à se vider automatiquement dans sa base pendant 60 jours. Grâce à la cartographie intelligente, il mémorise le plan de votre maison et peut nettoyer pièce par pièce sur demande ou selon un planning.',
    price: 699.99,
    originalPrice: 899.99,
    image: 'https://images.pexels.com/photos/4766211/pexels-photo-4766211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'home',
    categoryName: 'Maison',
    rating: 4.7,
    reviewCount: 3210,
    discount: 22,
    isPrime: true,
    features: [
      'Base d\'auto-vidage (60 jours)',
      'Cartographie intelligente Imprint',
      'Compatible Alexa et Google Assistant',
      'Détection d\'obstacles avancée',
      'Filtration capture 99% des allergènes'
    ],
    warranty: '2 ans',
    date: '2023-09-05',
    featured: 8
  }
];