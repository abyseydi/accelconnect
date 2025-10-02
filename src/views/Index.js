


/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroImage from "assets/img/bg1.png";

// images locales pour remplacer les icônes
import Icon1 from "assets/img/menu.png";
import Icon2 from "assets/img/ressources.png";
import Icon3 from "assets/img/rh.png";
import Icon4 from "assets/img/commercial.png";
import NewsStack from "components/newsStack";

// === Images pour la nouvelle section (mets-les dans src/assets/img/) ===
import News1 from "assets/img/mbaye.png";
import News2 from "assets/img/newdeal.jpg";
import News3 from "assets/img/sim.jpg";
import CEO from "assets/img/mbaye.png";
import Team from "assets/img/team.png";
import IconDoc from "assets/img/doclogo.png";       // petit pictogramme document
import IconPeople from "assets/img/peoplelogo.png"; // petit pictogramme personnes

// ⚠️ Choisis le bon chemin selon ton fichier :
// import PrettyCalendar from "components/PrettyCalendar";
import PrettyCalendar from "components/calendar";

export default function Index() {
  const resources = [
    { label: "Omni365", href: "#" },
    { label: "Vision Accel", href: "#" },
    { label: "Karangue", href: "#" },
  ];
  const life = [
    { label: "Qui fait quoi ?", href: "#" },
    { label: "Initiative QVT", href: "#" },
    { label: "Temps forts RH", href: "#" },
    { label: "Voir plus", href: "#" },
  ];

  return (
    <>
      <IndexNavbar fixed />

      {/* HERO */}
      <section
        className="relative mt-16 md:mt-20 h-screen max-h-860-px flex items-center"
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
              Nassour Abdel-Mahamoud !
            </p>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Ligne forcée en 2 colonnes avec Flex */}
          <div className="flex flex-row items-start space-x-8">
            {/* Colonne gauche : Calendrier */}
            <div className="w-1/2 min-w-0">
              <h3 className="text-[#1c2b68] font-semibold text-xl mb-3">
                Un jour spécial pour ?
              </h3>
              <PrettyCalendar
                initialYear={2023}
                initialMonth={2}
                selectedDay={20}
                events={[
                  { date: "2023-02-20", label: "Anniversaire de Ousmane DIA" },
                  { date: "2023-02-16", label: "Réunion Produits" },
                ]}
              />
            </div>

            {/* Colonne droite : Actualités */}
            <div className="w-1/2 min-w-0">
              <h3 className="text-[#1c2b68] font-semibold text-xl mb-3">
                Actualités
              </h3>
              <NewsStack
                items={[
                  {
                    img: News1,
                    title: "New Deal numérique du Sénégal",
                    excerpt:
                      "Lancement de la nouvelle stratégie numérique et perspectives d’innovation.",
                    href: "#",
                  },
                  {
                    img: News2,
                    title: "Salon International des Mines (SIM)",
                    excerpt:
                      "Tech & industrie : cap sur la productivité responsable et durable.",
                    href: "#",
                  },
                  {
                    img: News3,
                    title: "Alioune MBAYE — Entretien",
                    excerpt:
                      "« L’Afrique peut produire des solutions compétitives adaptées à ses besoins ».",
                    href: "#",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>


      {/* ======= FIN NOUVELLE SECTION ======= */}

      {/* BLOCS D’ICÔNES SUPERPOSÉS */}
      <section className="relative z-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-[6rem]">
            {[
              { img: Icon1, title: "Menu" },
              { img: Icon2, title: "Ressources" },
              { img: Icon3, title: "RH" },
              { img: Icon4, title: "Commercial" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-10 w-64 flex flex-col items-center hover:shadow-2xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-contain mb-6"
                />
                <h6 className="text-xl font-semibold text-blueGray-700 mt-2">
                  {item.title}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES (optionnel) */}
      <section id="features" className="py-24 bg-blueGray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-blueGray-800">
            Ce que vous obtenez
          </h2>
        </div>
      </section>

      <Footer />
    </>
  );
}
