/* eslint-disable */
import React, { useState } from "react";

/**
 * items: [{img, title, excerpt, href}]
 * Exemple d'images: import News1 from "assets/img/newdeal.jpg";
 */
export default function NewsStack({ items = [] }) {
    // ordre d’empilement (0=fond). On accepte 3 actus.
    const base = [
        { top: 0, left: 0, rotate: 0, scale: 1.0, z: 10 }, // carte 0 (fond bleu de ta maquette)
        { top: 28, left: 36, rotate: -2, scale: 1.0, z: 20 }, // carte 1
        { top: 56, left: 72, rotate: 0.8, scale: 1.0, z: 30 }, // carte 2 (devant par défaut)
    ];

    const [hovered, setHovered] = useState(null);

    // renvoie styles dynamiques pour animation hover
    const dynamic = (i) => {
        const isHover = hovered === i;
        return {
            transform: `translate3d(0,0,0) rotate(${base[i].rotate}deg) scale(${isHover ? 1.035 : base[i].scale})`,
            zIndex: isHover ? 50 : base[i].z,
            boxShadow: isHover
                ? "0 16px 40px rgba(0,0,0,0.35)"
                : "0 12px 28px rgba(0,0,0,0.22)",
            filter: isHover ? "saturate(1.08) contrast(1.02)" : "saturate(0.9)",
        };
    };

    return (
        <div className="relative">

            {/* Conteneur pile */}
            <div className="relative w-full" style={{ height: 380, maxWidth: 560 }}>
                {/* Carte 0 (bleu back) si on veut caler un fond — optionnelle */}
                <div
                    className="absolute rounded-xl"
                    style={{
                        top: base[0].top,
                        left: base[0].left,
                        right: 0,
                        height: 220,
                        background: "#193a8a",
                        zIndex: base[0].z - 5,
                    }}
                />

                {items.slice(0, 3).map((it, i) => (
                    <article
                        key={i}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        className="absolute w-[360px] h-[230px] rounded-xl overflow-hidden bg-white cursor-pointer transform transition-all duration-300 ease-out"
                        style={{
                            top: base[i].top + (i === 0 ? 20 : 0),
                            left: base[i].left + (i === 0 ? 20 : 0),
                            ...dynamic(i),
                        }}
                    >
                        {/* image */}
                        <a href={it.href || "#"} className="block h-full w-full relative">
                            <img
                                src={it.img}
                                alt={it.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* voile + contenu bas */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 100%)",
                                }}
                            />
                            <div className="absolute left-0 right-0 bottom-0 p-4 text-white">
                                <h4 className="text-lg font-semibold leading-tight">
                                    {it.title}
                                </h4>
                                <p className="text-sm opacity-90 mt-1 line-clamp-2">
                                    {it.excerpt}
                                </p>
                            </div>

                            {/* liseré bleu à droite (clin d’œil à ta maquette) */}
                            <div className="absolute top-2 right-3 h-[88%] w-1 rounded bg-[#5aa4ff]" />
                        </a>
                    </article>
                ))}
            </div>
        </div>
    );
}
