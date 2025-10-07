/* eslint-disable */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import NewsStack from "components/newsStack";
import PrettyCalendar from "components/calendar";

import HeroImage from "assets/img/bg1.png";
import BannerImage from "assets/img/banniere.png";
import ressourcesImg from "assets/img/ressourcesImg.png";
import News1 from "assets/img/mbaye.png";
import News2 from "assets/img/newdeal.jpg";
import News3 from "assets/img/sim.jpg";

import site1_baobab from "assets/img/heritage.png";
import accel_png from "assets/img/accel.png";
import shirikia_png from "assets/img/shirikia.png";

import seynabou from "assets/img/seynabou.jpg";
import tamsir from "assets/img/tamsir.png";
import ndeye from "assets/img/ndeye.jpg";
import sankara from "assets/img/sankara.jpg";

// icône du bouton flottant (Alex)
import ChatbotIcon from "assets/img/alex.png";

// Carte profil (section Bienvenue)
const ProfileCard = ({ name, image, text }) => (
  <div className="flex items-center p-4 min-w-0">
    <div className="w-24 h-24 flex-shrink-0 mr-4 rounded-xl overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="min-w-0">
      <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-wider">{name}</h3>
      <p className="font-serif text-base text-gray-700 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default function Index() {
  const twoColRef = useRef(null);
  const [chatOpen, setChatOpen] = useState(false);

  const frequentSites = [
    { title: "Site 1 - Baobab", image: site1_baobab },
    { title: "Site 2 - Data Map", image: accel_png },
    { title: "Site 3 - Shirikia", image: shirikia_png },
  ];

  const profiles = [
    { name: "SEYNABOU NDOUR", image: seynabou },
    { name: "TAMSIR NDIAYE", image: tamsir },
    { name: "NDEYE SENE", image: ndeye },
  ];

  return (
    <>
      <IndexNavbar fixed />

      {/* HERO (Alex superposé ici) */}
      <section
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
              alt=""
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
        <div className="bg-white rounded-2xl shadow-2xl border border-blueGray-100 overflow-hidden">
          {/* En-tête */}
          <div className="bg-[#20264e] text-white px-4 py-3 flex items-center justify-between">
            <div className="font-semibold">Assistant</div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white/80 hover:text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              aria-label="Fermer la fenêtre du chat"
            >
              ✕
            </button>
          </div>

          {/* Corps */}
          <div className="h-64 p-4 space-y-3 bg-blueGray-50/40">
            <div className="text-sm text-blueGray-700">
              Bonjour 👋 Comment puis-je vous aider ?
            </div>
            <div className="max-w-[85%] rounded-xl bg-white shadow px-3 py-2 text-sm">
              Je peux vous guider sur le portail.
            </div>
          </div>

          {/* Saisie */}
          <form
            className="border-t border-blueGray-100 p-2 flex items-center gap-2"
            onSubmit={(e) => { e.preventDefault(); /* TODO: handle message */ }}
          >
            <input
              type="text"
              placeholder="Écrivez votre message…"
              className="flex-1 px-3 py-2 rounded-lg border border-blueGray-200 focus:outline-none focus:ring-2 focus:ring-[#25509d]"
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-lg bg-[#25509d] text-white text-sm hover:opacity-95"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      {/* 2 colonnes : Calendrier + Actualités */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-4">
          <div
            ref={twoColRef}
            className="flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0"
          >
            <div className="w-full md:w-1/2 min-w-0">
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

            <div className="w-full md:w-1/2 min-w-0">
              <h3 className="text-[#1c2b68] font-semibold text-xl mb-3">
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

      {/* Bannière chevauchante */}
      <section className="relative w-full z-20" style={{ marginTop: "-500px" }}>
        <img
          src={BannerImage}
          alt="Bannière"
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
        />
      </section>

      {/* Image ressources */}
      <section className="relative w-full bg-white py-16">
        <div className="w-full">
          <img
            src={ressourcesImg}
            alt="Nouvelle section"
            className="rounded-lg shadow-lg object-cover"
            style={{
              width: "45%",
              height: "33%",
              marginLeft: "0",
              marginTop: "-350px",
            }}
          />
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
              <h2 className="text-[#25509d] font-extrabold tracking-wide text-[24px] mb-6">
                SITES FREQUENTS
              </h2>
              <div className="flex flex-col gap-6">
                {[site1_baobab, accel_png, shirikia_png].map((img, i) => (
                  <div
                    key={i}
                    className="w-full h-[120px] rounded-[18px] border-[4px] border-[#2f5ac8] overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                    style={{ marginBottom: "30px" }}
                  >
                    <img
                      src={img}
                      alt={`Site ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl" style={{ width: "66.66%", marginLeft: "200px" }}>
              <h2 className="text-[#25509d] font-extrabold tracking-wide text-[28px] mb-6 text-center">
                BIENVENUE !
              </h2>
              <div className="bg-[#e5e5e7] rounded-[22px] px-8 py-8 shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)]">
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

          <div className="bg-[#e6e6e6] rounded-md md:rounded-lg shadow-sm px-6 py-5 md:px-8 md:py-6 max-w-[600px]">
            <p className="font-semibold italic text-[#2b2b2b] text-[15px] md:text-[17px] leading-relaxed text-center">
              “Nous devons accepter de vivre africain. C’est la seule façon de vivre
              libre et de vivre digne.”
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
