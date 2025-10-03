

















// /* eslint-disable */
// import React, { useMemo, useState } from "react";

// /**
//  * items: [{ img, title?, excerpt?, href? }]
//  * sizes: optional per-layer size overrides (array of {w, h}), length up to 3.
//  * Example sizes to mimic your Figma: [{w:520,h:360},{w:520,h:360},{w:520,h:520}]
//  */
// export default function NewsStack({
//     items = [],
//     className = "",
//     sizes = null,               // per-layer sizes
//     // default card size if sizes not provided
//     cardWidth = 500,
//     cardHeight = 500,
//     // cover ratios (next card covers this portion of previous one)
//     coverHeightRatio = 3 / 5,
//     coverWidthRatio = 6 / 7,
// }) {
//     const [hovered, setHovered] = useState(null);

//     // Resolve sizes for 3 layers (back -> front)
//     const S = useMemo(() => {
//         const base = sizes && sizes.length
//             ? sizes
//             : [{ w: cardWidth, h: cardHeight }, { w: cardWidth, h: cardHeight }, { w: cardWidth, h: cardHeight }];
//         const arr = [];
//         for (let i = 0; i < 3; i++) {
//             const s = base[i] || base[base.length - 1];
//             arr.push({ w: s.w, h: s.h });
//         }
//         return arr;
//     }, [sizes, cardWidth, cardHeight]);

//     // Compute cascade: each next layer covers 3/5 height and 6/7 width of previous
//     const layers = useMemo(() => {
//         const L = [];
//         let top = 0, right = 0;
//         for (let i = 0; i < 3; i++) {
//             const w = S[i].w, h = S[i].h;
//             L.push({ top, right, w, h, z: 10 + i * 10, rotate: 0 });
//             // offset for the NEXT card relative to THIS one
//             top += (1 - coverHeightRatio) * h;  // 2/5 of height
//             right += (1 - coverWidthRatio) * w; // 1/7 of width
//         }
//         return L;
//     }, [S, coverHeightRatio, coverWidthRatio]);

//     const container = useMemo(() => {
//         const last = layers[layers.length - 1];
//         // Add a little breathing room on width for the right offsets
//         const maxW = Math.max(...layers.map(l => l.w + l.right)) + 8;
//         return {
//             width: maxW,
//             height: last.top + last.h + 8,
//         };
//     }, [layers]);

//     const hoverStyle = (i) => {
//         const is = hovered === i;
//         return {
//             transform: `translate3d(${is ? "-6px" : "0"},${is ? "-6px" : "0"},0) scale(${is ? 1.03 : 1})`,
//             zIndex: is ? 50 : layers[i].z,
//             boxShadow: is ? "0 22px 56px rgba(0,0,0,.34)" : "0 14px 32px rgba(0,0,0,.22)",
//             filter: is ? "saturate(1.06) contrast(1.02)" : "saturate(.92)",
//             transition: "transform .28s cubic-bezier(.2,.8,.2,1), box-shadow .28s ease, filter .28s ease",
//             borderRadius: 12,
//             overflow: "hidden",
//         };
//     };

//     return (
//         <div className={`relative ${className}`}>
//             <div
//                 className="relative"
//                 style={{ width: "100%", maxWidth: container.width, height: container.height }}
//             >
//                 {items.slice(0, 3).map((it, i) => (
//                     <article
//                         key={i}
//                         className="absolute bg-white cursor-pointer will-change-transform"
//                         style={{
//                             top: layers[i].top,
//                             right: layers[i].right,
//                             width: layers[i].w,
//                             height: layers[i].h,
//                             ...hoverStyle(i),
//                         }}
//                         onMouseEnter={() => setHovered(i)}
//                         onMouseLeave={() => setHovered(null)}
//                     >
//                         <a href={it.href || "#"} className="block w-full h-full relative" aria-label={it.title || `news-${i}`}>
//                             {/* Image */}
//                             <img src={it.img} alt={it.title || `news-${i}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

//                             {/* Liseré bleu à droite */}
//                             <div className="absolute top-3 right-3 h-[88%] w-1 rounded bg-[#5aa4ff]" />

//                             {/* Dégradé + texte — toujours visible pour la carte avant (i===2), sinon au hover */}
//                             {(it.title || it.excerpt) && (
//                                 <div
//                                     className={`absolute inset-0 flex items-end p-5 text-white ${hovered === i || i === 2 ? "opacity-100" : "opacity-0"}`}
//                                     style={{
//                                         background:
//                                             "linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.05) 60%, rgba(0,0,0,0) 100%)",
//                                         transition: "opacity .2s ease",
//                                     }}
//                                 >
//                                     <div className="w-full">
//                                         {it.title && (
//                                             <h4
//                                                 className="text-lg font-semibold leading-tight"
//                                                 style={{
//                                                     display: "-webkit-box",
//                                                     WebkitLineClamp: 2,
//                                                     WebkitBoxOrient: "vertical",
//                                                     overflow: "hidden",
//                                                 }}
//                                             >
//                                                 {it.title}
//                                             </h4>
//                                         )}
//                                         {it.excerpt && (
//                                             <p
//                                                 className="text-sm opacity-95 mt-1"
//                                                 style={{
//                                                     display: "-webkit-box",
//                                                     WebkitLineClamp: 2,
//                                                     WebkitBoxOrient: "vertical",
//                                                     overflow: "hidden",
//                                                 }}
//                                             >
//                                                 {it.excerpt}
//                                             </p>
//                                         )}
//                                     </div>
//                                 </div>
//                             )}
//                         </a>
//                     </article>
//                 ))}
//             </div>
//         </div>
//     );
// }






/* eslint-disable */
import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * items: [{ img, title?, excerpt?, href? }]
 * onSecondCardMeasure?: (domRect: DOMRect) => void   // ← callback vers le parent
 */
export default function NewsStack({
    items = [],
    className = "",
    onSecondCardMeasure, // ← parent calcule l'offset de la bannière si besoin
}) {
    const [hovered, setHovered] = useState(null);
    const secondCardRef = useRef(null);

    // ====== Paramètres de base ======
    const BASE_W = 500; // largeur uniforme des cartes
    const BASE_H = 500; // hauteur uniforme des cartes

    // Rappels:
    // - On veut que la carte (n+1) recouvre 3/5 (60%) en hauteur
    //   => son décalage vertical par rapport à (n) = 2/5 de la hauteur
    // - On veut qu'elle recouvre 6/7 (~85.71%) en largeur
    //   => son décalage horizontal = 1/7 de la largeur, vers la gauche (on augmente `right`)
    const V_OFFSET = BASE_H * (2 / 5);  // 2/5 de la hauteur
    const H_OFFSET = BASE_W * (1 / 7);  // 1/7 de la largeur

    // ====== Disposition calculée (cascade droite -> gauche, en descendant) ======
    const layers = useMemo(() => {
        const l0 = { top: 0, right: 0, width: BASE_W, height: BASE_H, rotate: 0, z: 10 };
        const l1 = { top: l0.top + V_OFFSET, right: l0.right + H_OFFSET, width: BASE_W, height: BASE_H, rotate: 0, z: 20 };
        const l2 = { top: l1.top + V_OFFSET, right: l1.right + H_OFFSET, width: BASE_W, height: BASE_H, rotate: 0, z: 30 };
        return [l0, l1, l2];
    }, [BASE_W, BASE_H, V_OFFSET, H_OFFSET]);

    const containerSize = useMemo(() => {
        const last = layers[layers.length - 1];
        return { width: BASE_W + 100, height: last.top + last.height + 4 };
    }, [layers]);

    const hoverStyle = (i) => {
        const is = hovered === i;
        return {
            transform: `translate3d(${is ? "-6px" : "0"},${is ? "-6px" : "0"},0) rotate(${layers[i].rotate}deg) scale(${is ? 1.03 : 1})`,
            zIndex: is ? 50 : layers[i].z,
            boxShadow: is ? "0 22px 56px rgba(0,0,0,.34)" : "0 14px 32px rgba(0,0,0,.22)",
            filter: is ? "saturate(1.06) contrast(1.02)" : "saturate(.92)",
            transition: "transform .28s cubic-bezier(.2,.8,.2,1), box-shadow .28s ease, filter .28s ease",
        };
    };

    // ====== Mesure fiable de la 2ᵉ carte (index 1) ======
    useEffect(() => {
        if (!onSecondCardMeasure || !secondCardRef.current) return;

        const measure = () => {
            const rect = secondCardRef.current.getBoundingClientRect();
            onSecondCardMeasure(rect);
        };

        const img = secondCardRef.current.querySelector("img");
        if (img) {
            if (img.complete) measure();
            else img.addEventListener("load", measure, { once: true });
        } else {
            measure();
        }

        const onResize = () => measure();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [onSecondCardMeasure]);

    return (
        <div className={`relative ${className}`}>
            <div
                className="relative"
                style={{ width: "100%", maxWidth: containerSize.width, height: containerSize.height }}
            >
                {items.slice(0, 3).map((it, i) => {
                    const common = {
                        className:
                            "absolute rounded-xl overflow-hidden bg-white cursor-pointer will-change-transform",
                        style: {
                            top: layers[i].top,
                            right: layers[i].right,
                            width: layers[i].width,
                            height: layers[i].height,
                            ...hoverStyle(i),
                        },
                        onMouseEnter: () => setHovered(i),
                        onMouseLeave: () => setHovered(null),
                    };

                    return (
                        <article key={i} {...common} ref={i === 1 ? secondCardRef : null}>
                            <a
                                href={it.href || "#"}
                                className="block w-full h-full relative"
                                aria-label={it.title || "article"}
                            >
                                {/* Image plein cadre */}
                                <img
                                    src={it.img}
                                    alt={it.title || "news"}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                />

                                {/* Liseré bleu à droite */}
                                <div className="absolute top-3 right-3 h-[88%] w-1 rounded bg-[#5aa4ff]" />

                                {/* Dégradé + texte (visible au hover ou sur la carte avant) */}
                                <div
                                    className={`absolute inset-0 flex items-end p-5 text-white ${hovered === i || i === 2 ? "opacity-100" : "opacity-0"
                                        }`}
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.05) 60%, rgba(0,0,0,0) 100%)",
                                        transition: "opacity .2s ease",
                                    }}
                                >
                                    {!!(it.title || it.excerpt) && (
                                        <div className="w-full">
                                            {it.title && (
                                                <h4
                                                    className="text-lg font-semibold leading-tight"
                                                    style={{
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    {it.title}
                                                </h4>
                                            )}
                                            {it.excerpt && (
                                                <p
                                                    className="text-sm opacity-95 mt-1"
                                                    style={{
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    {it.excerpt}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </a>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
