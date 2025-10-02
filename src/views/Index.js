
// import React from "react";
// import { Link } from "react-router-dom";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import Footer from "components/Footers/Footer.js";
// import HeroImage from "assets/img/bg1.png";

// // images locales pour remplacer les icônes
// import Icon1 from "assets/img/menu.png";
// import Icon2 from "assets/img/ressources.png";
// import Icon3 from "assets/img/rh.png";
// import Icon4 from "assets/img/commercial.png";

// // === Images pour la nouvelle section (mets-les dans src/assets/img/) ===
// import News1 from "assets/img/mbaye.png";
// import News2 from "assets/img/newdeal.jpg";
// import News3 from "assets/img/sim.jpg";
// // import CEO from "assets/img/ceo.png";
// import Team from "assets/img/team.png";
// import IconDoc from "assets/img/doclogo.png";     // petit pictogramme document
// import IconPeople from "assets/img/peoplelogo.png";  // petit pictogramme personnes
// import PrettyCalendar from "components/calendar";

// export default function Index() {
//   const resources = [
//     { label: "Omni365", href: "#" },
//     { label: "Vision Accel", href: "#" },
//     { label: "Karangue", href: "#" },
//   ];
//   const life = [
//     { label: "Qui fait quoi ?", href: "#" },
//     { label: "Initiative QVT", href: "#" },
//     { label: "Temps forts RH", href: "#" },
//     { label: "Voir plus", href: "#" },
//   ];

//   return (
//     <>
//       <IndexNavbar fixed />

//       {/* HERO */}
//       <section
//         className="relative mt-16 md:mt-20 h-screen max-h-860-px flex items-center"
//         style={{
//           backgroundImage: `linear-gradient(rgba(107, 20, 15, 0.65), rgba(107, 20, 15, 0.25)), url(${HeroImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center 30%",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="container mx-auto relative z-10 flex flex-wrap items-center">
//           <div className="w-full lg:w-6/12 px-4">
//             <h1 className="font-bold text-5xl md:text-7xl text-white leading-tight">
//               Dalal ak jàamm,
//             </h1>
//             <p className="mt-6 text-2xl md:text-3xl font-light text-white max-w-xl">
//               Nassour Abdel-Mahamoud !
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ======= NOUVELLE SECTION (juste sous le Hero) ======= */}
//       <section className="relative bg-white py-16">
//         <div className="container mx-auto px-4">
//           {/* Grille principale */}
//           <div className="grid grid-cols-12 gap-8 lg:gap-10">
//             {/* ==== COL GAUCHE (xl: 7/12) ==== */}
//             <div className="col-span-12 xl:col-span-7 space-y-8">
//               {/* Ligne titre + actualités superposées */}
//               <div className="grid grid-cols-12 gap-6">
//                 {/* Bloc gauche : "Un jour spécial pour ?" + calendrier simplifié */}
//                 {/* Bloc gauche : "Un jour spécial pour ?" + calendrier */}
//                 <div className="col-span-12 md:col-span-6">
//                   <PrettyCalendar
//                     year={2023}
//                     month={2}
//                     selectedDay={20}
//                     title="Un jour spécial pour ?"
//                     birthdayLabel="Anniversaire de Ousmane DIA"
//                   />
//                 </div>


//                 {/* Bloc droit : "Actualités" + pile d’images */}
//                 <div className="col-span-12 md:col-span-6 relative">
//                   <h3 className="text-[#1c2b68] font-semibold text-xl mb-3">
//                     Actualités
//                   </h3>

//                   <div className="relative h-72">
//                     {/* images superposées */}
//                     <img
//                       src={News1}
//                       alt="news 1"
//                       className="absolute top-6 left-6 w-64 h-40 object-cover rounded-xl shadow-lg"
//                     />
//                     <img
//                       src={News2}
//                       alt="news 2"
//                       className="absolute top-14 left-20 w-64 h-40 object-cover rounded-xl shadow-lg"
//                     />
//                     <img
//                       src={News3}
//                       alt="news 3"
//                       className="absolute top-24 left-32 w-64 h-40 object-cover rounded-xl shadow-lg"
//                     />

//                     {/* trait vertical décoratif à droite */}
//                     <div className="absolute top-0 right-2 bottom-0 border-r border-dashed border-blueGray-300 pointer-events-none" />
//                   </div>
//                 </div>
//               </div>

//               {/* Bande motif à pois + Carte Citation CEO */}
//               <div className="grid grid-cols-12 gap-6">
//                 {/* Motif à pois + grande image équipe en bas */}
//                 <div className="col-span-12 lg:col-span-6">
//                   {/* Motif à pois */}
//                   <div
//                     className="rounded-2xl h-48 mb-6"
//                     style={{
//                       backgroundImage:
//                         "radial-gradient(rgba(28,43,104,0.8) 1px, transparent 1px), radial-gradient(rgba(28,43,104,0.35) 1px, transparent 1px)",
//                       backgroundPosition: "0 0, 8px 8px",
//                       backgroundSize: "16px 16px",
//                       backgroundColor: "#f4f6fb",
//                     }}
//                   />

//                   {/* Grande photo équipe (bas gauche) */}
//                   <div className="overflow-hidden rounded-2xl">
//                     <img
//                       src={Team}
//                       alt="team"
//                       className="w-full h-72 object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* Carte CEO à droite */}
//                 <div className="col-span-12 lg:col-span-6">
//                   <div className="bg-[#0e173a] rounded-2xl shadow-xl overflow-hidden">
//                     {/* visuel haut */}
//                     <div className="relative">
//                       <img
//                         // src={CEO}
//                         src="mbaye.png"
//                         alt="CEO"
//                         className="w-full h-60 object-cover"
//                       />
//                       {/* filet bleu à droite */}
//                       <div className="absolute top-3 right-3 h-[88%] w-1 bg-[#5aa4ff] rounded" />
//                     </div>

//                     {/* contenu bas (citation) */}
//                     <div className="p-6 text-white">
//                       <div className="text-sm tracking-wide font-extrabold uppercase">
//                         Alioune <span className="font-light">MBAYE</span>
//                       </div>
//                       <div className="text-xs opacity-80">CEO ACCEL TECH</div>

//                       <p className="mt-4 text-[15px] leading-relaxed">
//                         “Mon objectif est de montrer que l’Afrique peut produire
//                         des solutions technologiques compétitives et adaptées à ses besoins.”
//                       </p>

//                       <p className="mt-5 text-[13px] opacity-80 italic">
//                         “Transformer nos idées en actions pour bâtir l’héritage de demain.” — Alioune Mbaye
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* ==== COL DROITE (xl: 5/12) ==== */}
//             <div className="col-span-12 xl:col-span-5 space-y-8">
//               {/* Top Resources */}
//               <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <img src={IconDoc} alt="doc" className="w-7 h-7 object-contain" />
//                   <h4 className="text-blueGray-800 text-xl font-semibold">Top Resources</h4>
//                 </div>
//                 <ul className="divide-y divide-blueGray-100">
//                   {resources.map((r, i) => (
//                     <li key={i} className="py-3 flex items-center justify-between">
//                       <a href={r.href} className="text-[#1c2b68] hover:underline font-medium">
//                         {r.label}
//                       </a>
//                       <span className="text-blueGray-400">›</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Vie d’entreprise */}
//               <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   <img src={IconPeople} alt="people" className="w-7 h-7 object-contain" />
//                   <h4 className="text-blueGray-800 text-xl font-semibold">Vie d’entreprise</h4>
//                 </div>
//                 <ul className="space-y-3">
//                   {life.map((l, i) => (
//                     <li key={i}>
//                       <a href={l.href} className="text-[#1c2b68] hover:underline">
//                         {l.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>
//       {/* ======= FIN NOUVELLE SECTION ======= */}

//       {/* BLOCS D’ICÔNES SUPERPOSÉS (tu peux garder ici ou déplacer au-dessus) */}
//       <section className="relative z-20 -mt-16">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-[6rem]">
//             {[
//               { img: Icon1, title: "Menu" },
//               { img: Icon2, title: "Ressources" },
//               { img: Icon3, title: "RH" },
//               { img: Icon4, title: "Commercial" },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-2xl shadow-xl p-10 w-64 flex flex-col items-center hover:shadow-2xl transition"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-16 h-16 object-contain mb-6"
//                 />
//                 <h6 className="text-xl font-semibold text-blueGray-700 mt-2">
//                   {item.title}
//                 </h6>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FEATURES (tu peux laisser ou retirer si tu n’en veux plus ici) */}
//       <section id="features" className="py-24 bg-blueGray-50">
//         <div className="container mx-auto px-4 text-center max-w-3xl">
//           <h2 className="text-3xl md:text-4xl font-semibold text-blueGray-800">
//             Ce que vous obtenez
//           </h2>
//           <p className="text-blueGray-500 mt-4">
//             Un starter propre, réactif, et extensible pour présenter votre produit/service.
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }












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

      {/* ======= NOUVELLE SECTION (juste sous le Hero) ======= */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Grille principale */}
          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            {/* ==== COL GAUCHE (xl: 7/12) ==== */}
            <div className="col-span-12 xl:col-span-7 space-y-8">
              {/* Ligne calendrier + actualités */}
              <div className="grid grid-cols-12 gap-6">
                {/* Bloc gauche : Calendrier */}
                <PrettyCalendar
                  initialYear={2023}
                  initialMonth={2}
                  selectedDay={20}
                  events={[
                    { date: "2023-02-20", label: "Anniversaire de Ousmane DIA" },
                    { date: "2023-02-16", label: "Réunion Produits" },
                  ]}
                />


                {/* Bloc droit : "Actualités" + pile d’images */}
                <div className="col-span-12 md:col-span-6 relative">
                  <h3 className="text-[#1c2b68] font-semibold text-xl mb-3">
                    Actualités
                  </h3>

                  <div className="relative h-72 md:h-80">
                    {/* images superposées */}
                    <img
                      src={News1}
                      alt="news 1"
                      className="absolute top-6 left-6 w-64 h-40 object-cover rounded-xl shadow-lg"
                    />
                    <img
                      src={News2}
                      alt="news 2"
                      className="absolute top-14 left-20 w-64 h-40 object-cover rounded-xl shadow-lg"
                    />
                    <img
                      src={News3}
                      alt="news 3"
                      className="absolute top-24 left-32 w-64 h-44 object-cover rounded-xl shadow-lg"
                    />

                    {/* trait vertical décoratif à droite */}
                    <div className="absolute top-0 right-2 bottom-0 border-r border-dashed border-blueGray-300 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Bande motif à pois + Carte Citation CEO */}
              <div className="grid grid-cols-12 gap-6">
                {/* Motif à pois + grande image équipe en bas */}
                <div className="col-span-12 lg:col-span-6">
                  {/* Motif à pois */}
                  <div
                    className="rounded-2xl h-48 mb-6"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(28,43,104,0.8) 1px, transparent 1px), radial-gradient(rgba(28,43,104,0.35) 1px, transparent 1px)",
                      backgroundPosition: "0 0, 8px 8px",
                      backgroundSize: "16px 16px",
                      backgroundColor: "#f4f6fb",
                    }}
                  />

                  {/* Grande photo équipe */}
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={Team}
                      alt="team"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>

                {/* Carte CEO à droite */}
                <div className="col-span-12 lg:col-span-6">
                  <div className="bg-[#0e173a] rounded-2xl shadow-xl overflow-hidden">
                    {/* visuel haut */}
                    <div className="relative">
                      <img
                        src={CEO}
                        alt="CEO"
                        className="w-full h-60 object-cover"
                      />
                      {/* filet bleu à droite */}
                      <div className="absolute top-3 right-3 h-[88%] w-1 bg-[#5aa4ff] rounded" />
                    </div>

                    {/* contenu bas (citation) */}
                    <div className="p-6 text-white">
                      <div className="text-sm tracking-wide font-extrabold uppercase">
                        Alioune <span className="font-light">MBAYE</span>
                      </div>
                      <div className="text-xs opacity-80">CEO ACCEL TECH</div>

                      <p className="mt-4 text-[15px] leading-relaxed">
                        “Mon objectif est de montrer que l’Afrique peut produire
                        des solutions technologiques compétitives et adaptées à ses besoins.”
                      </p>

                      <p className="mt-5 text-[13px] opacity-80 italic">
                        “Transformer nos idées en actions pour bâtir l’héritage de demain.” — Alioune Mbaye
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ==== COL DROITE (xl: 5/12) ==== */}
            <div className="col-span-12 xl:col-span-5 space-y-8">
              {/* Top Resources */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={IconDoc} alt="doc" className="w-7 h-7 object-contain" />
                  <h4 className="text-blueGray-800 text-xl font-semibold">Top Resources</h4>
                </div>
                <ul className="divide-y divide-blueGray-100">
                  {resources.map((r, i) => (
                    <li key={i} className="py-3 flex items-center justify-between">
                      <a href={r.href} className="text-[#1c2b68] hover:underline font-medium">
                        {r.label}
                      </a>
                      <span className="text-blueGray-400">›</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vie d’entreprise */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={IconPeople} alt="people" className="w-7 h-7 object-contain" />
                  <h4 className="text-blueGray-800 text-xl font-semibold">Vie d’entreprise</h4>
                </div>
                <ul className="space-y-3">
                  {life.map((l, i) => (
                    <li key={i}>
                      <a href={l.href} className="text-[#1c2b68] hover:underline">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

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
