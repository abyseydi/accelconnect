

import React, { useRef, useState } from "react";
import sankara from "assets/img/sankara.jpg";
import site1_baobab from "assets/img/heritage.png";
import accel_png from "assets/img/accel_logo.png";
import site2_accel from "assets/img/accel.png";
import ressourcesImg from "assets/img/ressourcesImg.png";
import shirikia_png from "assets/img/shirikia.png";
import BannerImage from "assets/img/banniere.png";
import PrettyCalendar from "components/calendar";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ChatbotIcon from "assets/img/alex.png";
import HeroImage from "assets/img/bg1.png";
import News1 from "assets/img/mbaye.png";
import News2 from "assets/img/newdeal.jpg";
import News3 from "assets/img/sim.jpg";
import NewsStack from "components/newsStack";
import birthday from "assets/img/birthday.png";
import menu from "assets/img/menu.png";
import ressources from "assets/img/ressources.png";
import rh from "assets/img/rh.png";
import commercial from "assets/img/commercial.png";
import moyens from "assets/img/moyens.png";
import formation from "assets/img/formation.png";
import topressource from "assets/img/topressource.png";

import vie from "assets/img/vie.png";



const seynabou = "https://placehold.co/150x150/FFC0CB/000000?text=Seyn%C3%A9dou";
const tamsir = "https://placehold.co/150x150/ADD8E6/000000?text=Tamsir";
const ndeye = "https://placehold.co/150x150/90EE90/000000?text=Ndeye";


// --- Placeholder pour image non trouvée ---
const placeholderImage = "https://placehold.co/120x120/E0E0E0/333333?text=N/A";

// ====================================================================
// 2. COMPOSANTS INTERNES
// Définition des composants (Nav, Footer, Calendar, NewsStack)
// à l'extérieur du composant Index.
// ====================================================================

// --- IndexNavbar Placeholder ---


// --- Footer Component (Fix: Blue Background) ---
const Footer = () => {
  return (
    <footer
      id="contact"
      // L'utilisation de cette classe Tailwind garantit le fond bleu foncé
      className="bg-[#1e204a] text-white py-12 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="text-lg font-bold mb-2">Powered By</p>
          {/* L'image est une URL de placeholder */}
          <img src={accel_png} alt="Accel Logo" className="h-16 sm:h-20" />
        </div>
        <div>
          <h3 className="font-bold mb-4 uppercase tracking-wide">Liens utiles</h3>
          <ul className="space-y-3">
            <li>🔗 Red Hat Enterprise Linux</li>
            <li>🔗 Openshift AI</li>
            <li>🔗 Heritage Cloud</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 uppercase tracking-wide">Contact</h3>
          <ul className="space-y-3">
            <li>+221 33 820 83 83</li>
            <li>info@accel-tech.net</li>
            <li>165 virage, Route de l'aéroport, Dakar, Sénégal</li>
          </ul>
        </div>
        <div className="flex items-start md:items-center justify-start md:justify-center gap-6 text-fuchsia-400 text-2xl">
          {/* Icones Font Awesome (assumées chargées) */}
          <i className="fab fa-facebook-f hover:text-white transition-colors cursor-pointer" aria-label="Facebook" />
          <i className="fab fa-linkedin-in hover:text-white transition-colors cursor-pointer" aria-label="LinkedIn" />
          <i className="fab fa-youtube hover:text-white transition-colors cursor-pointer" aria-label="YouTube" />
        </div>
      </div>
    </footer>
  );
};

// --- PrettyCalendar Placeholder ---





// ====================================================================
// 3. COMPOSANT PRINCIPAL
// ====================================================================

export default function Index() {
  const twoColRef = useRef(null);
  const [chatOpen, setChatOpen] = useState(false);

  // Remarque: La fonction ProfileCard n'est plus utilisée directement
  // mais la structure de Bienvenue suit la logique des données.
  const iconTitles = [
    "Menu",
    "Ressources",
    "R.H.",
    "Commercial",
    "Moyens Généraux",
    "Formation"
  ];

  return (
    <>
      <IndexNavbar fixed />

      {/* HERO (Alex superposé ici) */}
      <section
        id="accueil"
        className="relative z-[60] mt-16 md:mt-20 h-screen max-h-860-px flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(107, 20, 15, 0.65), rgba(107, 20, 15, 0.25)), url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto relative z-10 flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="font-bold text-5xl md:text-7xl text-white leading-tight">
              Dalal ak jàamm,
            </h1>
            <p className="mt-6 text-2xl md:text-3xl font-light text-white max-w-xl">
              Nassour !
            </p>
          </div>
        </div>

        {/* Bouton Alex superposé au Hero (responsive + safe-area) */}
        <button
          type="button"
          onClick={() => setChatOpen(v => !v)}
          className="
            absolute z-[70]
            bottom-[max(theme(spacing.4),env(safe-area-inset-bottom))]
            right-[max(theme(spacing.4),env(safe-area-inset-right))]
            rounded-full border-2 border-white shadow-lg overflow-hidden cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-white/70
            group
          "
          style={{
            marginLeft: "95%",
            marginTop: "38%"
          }}
          aria-label={chatOpen ? "Fermer le chatbot" : "Ouvrir le chatbot"}
          title="Chat"
        >
          <div
            className="
              relative
              w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
              transition-transform duration-300 group-hover:scale-105
            "
            aria-hidden="true"
          >
            <img
              src={ChatbotIcon}
              alt="Icône d'assistant virtuel Alex"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* halo discret (désactivé si préférence “reduced motion”) */}
            <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25509d]/30 animate-ping motion-reduce:hidden" />
          </div>
        </button>
      </section>

      {/* Panneau de Chat – responsive et propre (hors HERO) */}
      <div
        className={`
          fixed z-[80] transition-all duration-300
          ${chatOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{
          right: "max(1rem, env(safe-area-inset-right))",
          bottom: chatOpen
            ? "max(6rem, calc(env(safe-area-inset-bottom) + 5rem))"
            : "max(2rem, env(safe-area-inset-bottom))",
          width: "min(92vw, 380px)",
        }}
        role="dialog"
        aria-modal="false"
        aria-label="Assistant virtuel"
      >



        {/* </div> */}
      </div>
      {/* AJUSTEMENT 1 : Montée de la barre flottante 
        mt-[-10rem] -> mt-[-14rem] pour une superposition garantie
      */}
      <section className="relative z-30 w-full mt-[-14rem] md:mt-[-18rem]" style={{ marginBottom: 140 }}>
        {/* NOUVEAU CONTENEUR pour ajouter des marges latérales externes à la barre blanche */}
        <div className="px-4 lg:px-16">
          {/* Conteneur principal centré (max-w-7xl mx-auto), occupant la largeur définie par son parent (px-16) */}
          <div className=" p-4 flex justify-center items-start gap-6 md:gap-10 border-b-4 border-[#25509d] max-w-7xl mx-auto">

            {/* Les six images (utilisez vos vrais imports dans le fichier complet) */}
            {[
              menu,
              ressources,
              rh,
              commercial,
              moyens,
              formation
            ].map((img, index) => (
              // Conteneur de l'icône + titre : Flex column centré
              <div
                key={index}
                // Ajout de flex-col et items-center pour aligner icône et titre
                className="flex flex-col items-center cursor-pointer shrink-0"
                style={{
                  marginRight: 30,
                  marginLeft: 30,
                  marginTop: -50, // Conserve l'ajustement pour le centrage visuel
                  paddingBottom: '8px'
                }}
                title={iconTitles[index]}
              >

                {/* Bloc blanc de l'icône */}
                <div
                  // MODIFICATION : J'ai forcé le style de border-radius à 25px ici
                  className="p-3 bg-white rounded-3xl shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-15"
                  style={{
                    borderRadius: '25px', // Style INLINE pour forcer le border-radius
                  }}
                >
                  {/* Conteneur de l'image (centrage) - AUGMENTATION DE LA TAILLE ICI */}
                  <div className="w-14 h-14 md:w-16 md:h-16 overflow-hidden rounded-lg flex items-center justify-center">

                    {/* L'image est centrée et redimensionnée */}
                    <img
                      src={img}
                      alt={`Image Flottante ${index + 1}`}
                      className="object-contain"
                      style={{ width: "67%", height: "50%" }}
                    />
                  </div>
                </div>

                {/* Titre sous l'image */}
                <p className="mt-2 text-center text-sm font-medium text-gray-700 whitespace-nowrap">
                  {iconTitles[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* AJUSTEMENT 2 : Ajout de pt-48 (padding top) pour compenser la montée de la barre flottante,
        empêchant son contenu d'être caché par le calendrier/actualités.
      */}
      <section className="relative bg-white pt-13 pb-11">
        <div className="container mx-auto px-4">
          <div
            ref={twoColRef}
            className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0"
          >
            <div className="w-full md:w-1/2 min-w-0">
              <h3
                className="text-[#25509d] font-semibold text-xl mb-4"
                style={{ color: '#25509d' }}
              >
                Un jour spécial pour ?
              </h3>
              <PrettyCalendar />

              {/* NOUVEAU DIV D'ANNIVERSAIRE (SANS BORDURE) */}
              <div className="mt-6 p-3 bg-white flex items-center justify-between space-x-2 text-sm border-none w-1/2 ">
                <p className="text-black font-extrabold-700">
                  Anniversaire de Ousmane DIA
                </p>
                <img
                  src={birthday}
                  onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }}
                  alt="Icône d'anniversaire"
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 min-w-0">
              <h3
                className="text-[#25509d] font-semibold text-xl mb-4 text-center"
                style={{ color: '#25509d' }}
              >
                Actualités
              </h3>
              <NewsStack
                items={[
                  { img: News2, href: "#" },
                  { img: News3, href: "#" },
                  { img: News1, href: "#" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full z-20" style={{ marginTop: "-500px", }}>
        <img
          src={BannerImage}
          alt="Bannière"
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        />
      </section>

      <section className="relative w-full bg-white pt-14 pb-14" style={{ marginBottom: "8%" }}>
        {/* MODIFICATION CLÉ 1: Réduction du gap horizontal de lg:gap-12 à lg:gap-8 */}
        <div className="max-w-7xl flex flex-col lg:flex-row items-end lg:gap-8">

          {/* Bloc 1: Image Ressources */}
          <div
            className="w-full lg:w-1/3 flex-shrink-0"
            style={{ marginTop: "-250px" }}
          >
            <img
              src={ressourcesImg}
              alt="Nouvelle section"
              className="rounded-lg shadow-2xl object-cover w-full max-w-xs max-h-[350px] h-auto"
              style={{ width: "85%" }}
            />
          </div>

          {/* Bloc 2: Les deux cartes */}
          <div
            // MODIFICATION CLÉ 2: Retrait du padding (p-8) qui ajoutait un espace à gauche
            className="flex flex-row justify-start items-stretch gap-8 w-full md:w-[85%] my-10 lg:w-2/3"
            style={{ "--custom-radius": "1rem" }}
          >
            {/* Bloc 1: Top Ressources (Contenu non modifié) */}
            <div
              className="shadow-md p-6 w-64 h-80 flex flex-col justify-between items-center"
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "var(--custom-radius)",
                marginRight: "5%"
              }}
            >
              <h3 className="font-extrabold text-2xl text-black text-center" style={{ marginTop: "10%" }}>
                Top Ressources
              </h3>

              {/* Contenu interne */}
              <div className="flex flex-row items-center justify-center gap-2 mt-6">
                <div className="w-24 h-24 flex justify-center items-center">
                  <img
                    src={topressource}
                    alt="Icône Top Ressources"
                    className="object-contain"
                    style={{ width: "75%", height: "auto", marginRight: "20%", marginLeft: "10%" }}
                  />
                </div>
                <div
                  // MODIFICATION CLÉ : Remplacement de gap-4 par gap-5 pour plus d'espace vertical
                  className="flex flex-col gap-5 items-start justify-center"
                  style={{
                    marginRight: "2%",
                    width: "60%"
                  }}
                >
                  <a href="#" className="text-black text-xl" style={{ textDecoration: 'underline' }}>Omni 365</a>
                  <a href="#" className="text-black text-xl" style={{ textDecoration: 'underline' }}>Vision accel</a>
                  <a href="#" className="text-black text-xl" style={{ textDecoration: 'underline' }}>Kaarangué</a>
                </div>
              </div>

              {/* Lien Voir plus */}
              <a
                href="#"
                className="mt-auto text-black font-medium text-base hover:text-gray-700 transition-colors self-center" style={{ marginBlock: "10%" }}
              >
                Voir plus
              </a>
            </div>

            {/* ---------------------------------------------------------------------- */}

            {/* Bloc 2: Vie d'entreprise (Contenu non modifié) */}
            <div
              className="shadow-md p-6 w-64 h-80 flex flex-col justify-between items-center"
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "var(--custom-radius)",
                marginRight: "5%"
              }}
            >
              <h3 className="font-extrabold text-2xl text-black text-center" style={{ marginTop: "10%" }}>
                Vie d'entreprise
              </h3>

              {/* Contenu interne */}
              <div className="flex flex-row items-center justify-center gap-2 mt-6">
                <div className="w-24 h-24 flex justify-center items-center">
                  <img
                    src={vie}
                    alt="Icône Top Ressources"
                    className="object-contain"
                    style={{ width: "75%", height: "auto", marginRight: "20%", marginLeft: "10%" }}
                  />
                </div>
                <div
                  // MODIFICATION CLÉ : Remplacement de gap-3 par gap-4
                  className="flex flex-col gap-4 items-start justify-center"
                  style={{
                    marginRight: "2%",
                    width: "60%"
                  }}
                >
                  <a href="#" className="text-black text-xl" style={{ textDecoration: 'underline' }}>Qui fait quoi ?</a>
                  <a href="#" className="text-black text-xl" style={{ textDecoration: 'underline' }}>Initiative OVT</a>
                  <a href="#" className="text-black text-xl" style={{ textDecoration: 'underline' }}>Temps forts RH</a>
                </div>
              </div>

              {/* Lien Voir plus */}
              <a
                href="#"
                className="mt-auto text-black font-medium text-base hover:text-gray-700 transition-colors self-center" style={{ marginBlock: "10%" }}
              >
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* SITES FREQUENTS / BIENVENUE */}
      <section
        className="w-full bg-white py-14"
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-start gap-12">
            <div className="rounded-xl" style={{ width: "33.33%" }}>
              {/* <h2 className="text-[#25509d] font-extrabold tracking-wide text-[24px] mb-6"> */}
              <h2 className="text-[#25509d] font-semibold text-xl mb-4 text-center" // Ajout de text-center
                style={{ color: '#25509d' }}>

                SITES FREQUENTS
              </h2>
              <div className="flex flex-col gap-6">
                {[site1_baobab, site2_accel, shirikia_png].map((img, i) => (
                  <div
                    key={i}
                    className="w-full h-[120px] rounded-[18px] border-[4px] border-[#2f5ac8] overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                    style={{ marginBottom: "30px" }}
                  >
                    <img
                      src={img}
                      alt="top ressources"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl" style={{ width: "66.66%", marginLeft: "200px" }}>
              <h2 className="text-[#25509d] font-semibold text-xl mb-4 text-center" // Ajout de text-center
                style={{ color: '#25509d' }}>
                BIENVENUE !
              </h2>
              <div className="bg-[#e5e5e7] rounded-[22px] px-8 py-8 shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)]">
                {/* Profil 1 */}
                <div className="flex items-start gap-6 pb-6 mb-6 border-b border-[#d7d7da]">
                  <div className="w-[40px] h-[20px] rounded-[18px] overflow-hidden shrink-0">
                    <img src={seynabou} alt="FATOU DIA" className="w-full h-full object-cover" style={{ width: "40%", height: "80%" }} />
                  </div>
                  <div className="ml-[30px]">
                    <div className="text-[#1c58c9] font-bold uppercase tracking-wide text-sm mb-1">
                      SEYNABOU NDOUR
                    </div>
                    <p className="text-[15px] leading-relaxed">
                      <span className="font-extrabold">Lorem Ipsum is simply dummy</span><br />
                      text of the printing and<br />typesetting industry.
                    </p>
                  </div>
                </div>
                {/* Profil 2 */}
                <div className="flex items-start gap-6 pb-6 mb-6 border-b border-[#d7d7da]">
                  <div className="w-[40px] h-[20px] rounded-[18px] overflow-hidden shrink-0 bg-[#cfd6df]">
                    <img src={tamsir} alt="MOUSSA FALL" className="w-full h-full object-cover" style={{ width: "40%", height: "80%" }} />
                  </div>
                  <div className="ml-[30px]">
                    <div className="text-[#1c58c9] font-bold uppercase tracking-wide text-sm mb-1">
                      MOUSSA TRAORE
                    </div>
                    <p className="text-[15px] leading-relaxed">
                      <span className="font-extrabold">Lorem Ipsum is simply dummy</span><br />
                      text of the printing and<br />typesetting industry.
                    </p>
                  </div>
                </div>
                {/* Profil 3 */}
                <div className="flex items-start gap-6">
                  <div className="w-[40px] h-[20px] rounded-[18px] overflow-hidden shrink-0">
                    <img src={ndeye} alt="NDEYE SENE" className="w-full h-full object-cover" style={{ width: "40%", height: "80%" }} />
                  </div>
                  <div className="ml-[30px]">
                    <div className="text-[#1c58c9] font-bold uppercase tracking-wide text-sm mb-1">
                      NDEYE SENE
                    </div>
                    <p className="text-[15px] leading-relaxed">
                      <span className="font-extrabold">Lorem Ipsum is simply dummy</span><br />
                      text of the printing and<br />typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="w-full bg-white py-20 flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-lg overflow-hidden shadow">
              <img src={sankara} alt="Thomas Sankara" className="w-full h-full object-cover" />
            </div>
            <span className="mt-3 text-base md:text-lg font-semibold">Thomas Sankara</span>
          </div>

          <div
            // Rétention des classes de forme et d'ombre
            className="rounded-md md:rounded-lg shadow-sm px-6 py-5 md:px-8 md:py-6 max-w-[600px]"
            // MODIFICATION CLÉ : Ajout du style en ligne pour forcer le fond gris
            style={{ backgroundColor: '#e6e6e6', marginLeft: "10%", width: '#)%' }}
          >
            <p className="font-semibold italic text-[#2b2b2b] text-[15px] md:text-[17px] leading-relaxed text-center">
              “Nous devons accepter de vivre africain. C’est la seule façon de vivre<br />
              libre et de vivre digne.”
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
