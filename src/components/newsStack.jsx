
import React, { useEffect, useMemo, useRef, useState } from "react";


export default function NewsStack({
    items = [],
    className = "",
    onSecondCardMeasure,
}) {
    const [hovered, setHovered] = useState(null);
    const secondCardRef = useRef(null);

    const BASE_W = 500;
    const BASE_H = 500;


    const V_OFFSET = BASE_H * (2 / 5);
    const H_OFFSET = BASE_W * (1 / 7);

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
