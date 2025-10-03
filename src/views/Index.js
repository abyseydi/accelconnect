


/* eslint-disable */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import HeroImage from "assets/img/bg1.png";
import BannerImage from "assets/img/banniere.png";

import NewsStack from "components/newsStack";
import PrettyCalendar from "components/calendar";

import News1 from "assets/img/mbaye.png";
import News2 from "assets/img/newdeal.jpg";
import News3 from "assets/img/sim.jpg";

export default function Index() {
  const [bannerOffset, setBannerOffset] = useState(0);
  const twoColRef = useRef(null);

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
              Nassour !
            </p>
          </div>
        </div>
      </section>

      {/* 2 colonnes : Calendrier + Actualités */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div ref={twoColRef} className="flex flex-row items-start space-x-8">
            <div className="w-1/2 min-w-0">
              <h3 className="text-[#1c2b68] font-semibold text-xl mb-3">Un jour spécial pour ?</h3>
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

            <div className="w-1/2 min-w-0">
              <h3 className="text-[#1c2b68] font-semibold text-xl mb-3">Actualités</h3>
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

      {/* Bannière — chevauche légèrement les actus */}
      <section
        className="relative w-full z-20"
        style={{
          marginTop: "-500px", // ← ajuste ici la hauteur à "remonter"
        }}
      >
        <img
          src={BannerImage}
          alt="Bannière"
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        />
      </section>

      {/* SECTION suivante */}
      <section id="features" className="py-24 bg-blueGray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-blueGray-800">Ce que vous obtenez</h2>
        </div>
      </section>

      <Footer />
    </>
  );
}
