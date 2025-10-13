import React from 'react';

// Fonction utilitaire pour générer des images de substitution
const PLACEHOLDER_IMG_URL = (width, height, text = 'Image') =>
  `https://placehold.co/${width}x${height}/4b5563/FFFFFF?text=${text}`;

const Footer = () => {
  // Remplacement des imports d'images par des URLs de Placeholder
  const ACCEL_LOGO_LIGHT = PLACEHOLDER_IMG_URL(120, 40, 'ACCEL LOGO');

  return (
    <footer
      className="bg-[#1e204a] text-white py-12 px-4"
      style={{ backgroundColor: '#1e204a' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-sm">
        {/* Section Powered By */}
        <div className="flex flex-col">
          <p className="text-lg font-bold mb-2">Powered By</p>
          <img
            src={ACCEL_LOGO_LIGHT}
            alt="Accel Logo"
            className="h-16 sm:h-20 object-contain object-left"
          />
        </div>

        {/* Section Liens utiles */}
        <div>
          <h3 className="font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-3">
            <li>🔗 Red Hat Enterprise Linux</li>
            <li>🔗 Openshift AI</li>
            <li>🔗 Heritage Cloud</li>
          </ul>
        </div>

        {/* Section Contact */}
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li>+221 33 820 83 83</li>
            <li>info@accel-tech.net</li>
            <li>165 virage, Route de l'aéroport, Dakar, Sénégal</li>
          </ul>
        </div>

        {/* Section Médias sociaux (Nous assumons que les icônes Font Awesome sont chargées) */}
        <div className="flex items-end md:items-center justify-start md:justify-center gap-6 text-fuchsia-500 text-2xl">
          <i className="fab fa-facebook-f" aria-label="Facebook" />
          <i className="fab fa-linkedin-in" aria-label="LinkedIn" />
          <i className="fab fa-youtube" aria-label="YouTube" />
        </div>
      </div>
    </footer>
  );
};

// C'est cette ligne qui corrige l'erreur !
export default Footer;
