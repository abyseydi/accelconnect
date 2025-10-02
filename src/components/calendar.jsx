// /* eslint-disable */
// import React, { useMemo, useState } from "react";

// // Petite utilitaire
// const range = (n) => [...Array(n).keys()];

// export default function PrettyCalendar({
//     // Props optionnels
//     initialYear = new Date().getFullYear(),
//     initialMonth = new Date().getMonth() + 1, // 1..12
//     selectedDay: selectedDayProp = null,      // ex: 20
//     title = "Un jour spécial pour ?",
//     // [{ date: '2023-02-20', label: 'Anniversaire de Ousmane DIA' }]
//     events = [],
// }) {
//     // État local pour la navigation
//     const [year, setYear] = useState(initialYear);
//     const [month, setMonth] = useState(initialMonth); // 1..12
//     const [selectedDay, setSelectedDay] = useState(selectedDayProp);

//     const today = useMemo(() => {
//         const d = new Date();
//         return { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() };
//     }, []);

//     // Calculs de grille
//     const monthIndex = month - 1;
//     const firstWeekday = new Date(year, monthIndex, 1).getDay(); // 0=dim..6=sam
//     const daysInMonth = new Date(year, month, 0).getDate();

//     // cellules: vides avant le 1er + jours du mois, complétées à /7
//     const cells = useMemo(() => {
//         const arr = [
//             ...Array(firstWeekday).fill(null),
//             ...range(daysInMonth).map((i) => i + 1),
//         ];
//         while (arr.length % 7 !== 0) arr.push(null);
//         return arr;
//     }, [firstWeekday, daysInMonth]);

//     // mapping des événements par jour
//     const eventMap = useMemo(() => {
//         const map = {};
//         events.forEach((e) => {
//             const dt = new Date(e.date);
//             if (dt.getFullYear() === year && dt.getMonth() + 1 === month) {
//                 const d = dt.getDate();
//                 if (!map[d]) map[d] = [];
//                 map[d].push(e);
//             }
//         });
//         return map;
//     }, [events, year, month]);

//     const monthName = new Date(year, monthIndex, 1).toLocaleString("fr-FR", {
//         month: "long",
//     });

//     // Navigation
//     const goPrev = () => {
//         if (month === 1) {
//             setMonth(12);
//             setYear((y) => y - 1);
//         } else setMonth((m) => m - 1);
//     };
//     const goNext = () => {
//         if (month === 12) {
//             setMonth(1);
//             setYear((y) => y + 1);
//         } else setMonth((m) => m + 1);
//     };

//     const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//     // Styles Tailwind (compatibles v2)
//     const pill = "bg-blueGray-100 rounded-full px-3 py-2";
//     const btn =
//         "h-9 w-9 flex items-center justify-center rounded-full bg-white shadow hover:shadow-md focus:outline-none";

//     return (
//         <div className="w-full max-w-sm">
//             <h3 className="text-[#1c2b68] font-semibold text-2xl mb-3">{title}</h3>

//             <div className="bg-white rounded-2xl shadow-md p-5">
//                 {/* En-tête mois / nav */}
//                 <div className="flex items-center justify-between mb-3">
//                     <button onClick={goPrev} aria-label="Mois précédent" className={btn}>
//                         {/* chevron left */}
//                         <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
//                             <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                         </svg>
//                     </button>

//                     <div className="text-center uppercase tracking-wide text-blueGray-600 text-lg font-medium">
//                         {monthName} {year}
//                     </div>

//                     <button onClick={goNext} aria-label="Mois suivant" className={btn}>
//                         {/* chevron right */}
//                         <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
//                             <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Jours de la semaine (bandeau gris arrondi) */}
//                 <div className={pill}>
//                     <div className="grid grid-cols-7 text-center text-[11px] font-semibold">
//                         {week.map((d, i) => (
//                             <div key={d} className={i === 0 ? "text-red-500" : "text-blueGray-500"}>
//                                 {d}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Grille des dates */}
//                 <div className="mt-4 grid grid-cols-7 gap-y-2">
//                     {cells.map((day, idx) => {
//                         const isSunday = idx % 7 === 0;
//                         const isToday =
//                             day &&
//                             year === today.y &&
//                             month === today.m &&
//                             day === today.d;
//                         const isSelected = day && selectedDay === day;

//                         return (
//                             <div key={idx} className="flex items-center justify-center">
//                                 {day ? (
//                                     <button
//                                         onClick={() => setSelectedDay(day)}
//                                         className={[
//                                             "w-9 h-9 flex items-center justify-center text-sm rounded-md transition",
//                                             isSelected
//                                                 ? "bg-[#e8b6b6] text-[#6b1410] font-semibold"
//                                                 : "hover:bg-blueGray-100 text-blueGray-700",
//                                             isSunday && !isSelected ? "text-red-500" : "",
//                                             isToday && !isSelected ? "ring-2 ring-[#1c2b68]" : "",
//                                         ].join(" ")}
//                                     >
//                                         {day}
//                                     </button>
//                                 ) : (
//                                     <span className="w-9 h-9" />
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Légende événement si le jour sélectionné a des events */}
//                 {selectedDay && eventMap[selectedDay] && (
//                     <div className="mt-4 space-y-2">
//                         {eventMap[selectedDay].map((e, i) => (
//                             <div key={i} className="text-sm text-blueGray-700">
//                                 <span className="inline-block w-2 h-2 rounded-full bg-[#1c2b68] mr-2" />
//                                 {e.label}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             {/* Bande “anniversaire” façon Figma (facultatif si events) */}
//             {!events.length && (
//                 <div className="mt-5 flex items-center justify-between">
//                     <span className="text-blueGray-800 font-semibold text-lg">
//                         Anniversaire de Ousmane DIA
//                     </span>
//                     <span role="img" aria-label="party" className="text-2xl">
//                         🎉
//                     </span>
//                 </div>
//             )}
//         </div>
//     );
// }



/* eslint-disable */
import React, { useMemo, useState } from "react";
import "assets/styles/tailwind.css"; // ou le chemin exact de ta feuille Tailwind

const range = (n) => [...Array(n).keys()];

export default function PrettyCalendar({
    initialYear = new Date().getFullYear(),
    initialMonth = new Date().getMonth() + 1, // 1..12
    selectedDay: selectedDayProp = null,
    title = "Un jour spécial pour ?",
    events = [], // [{ date:'2023-02-20', label:'Anniversaire …' }]
}) {
    const [year, setYear] = useState(initialYear);
    const [month, setMonth] = useState(initialMonth);
    const [selectedDay, setSelectedDay] = useState(selectedDayProp);

    const today = useMemo(() => {
        const d = new Date();
        return { y: d.getFullYear(), m: d.getMonth() + 1, d: d.getDate() };
    }, []);

    const monthIdx = month - 1;
    const firstWeekday = new Date(year, monthIdx, 1).getDay(); // 0=dim..6=sam
    const daysInMonth = new Date(year, month, 0).getDate();

    const cells = useMemo(() => {
        const a = [
            ...Array(firstWeekday).fill(null),
            ...range(daysInMonth).map((i) => i + 1),
        ];
        while (a.length % 7 !== 0) a.push(null);
        return a;
    }, [firstWeekday, daysInMonth]);

    const eventMap = useMemo(() => {
        const m = {};
        events.forEach((e) => {
            const dt = new Date(e.date);
            if (dt.getFullYear() === year && dt.getMonth() + 1 === month) {
                const d = dt.getDate();
                (m[d] ||= []).push(e);
            }
        });
        return m;
    }, [events, year, month]);

    const monthName = new Date(year, monthIdx, 1).toLocaleString("fr-FR", {
        month: "long",
    });
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const goPrev = () => (month === 1 ? (setYear(y => y - 1), setMonth(12)) : setMonth(m => m - 1));
    const goNext = () => (month === 12 ? (setYear(y => y + 1), setMonth(1)) : setMonth(m => m + 1));

    // styles inline qui garantissent 7 colonnes, même si Tailwind ne charge pas
    const grid7 = { display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))" };

    return (
        <div className="w-full" style={{ maxWidth: 400 }}>
            <h3 className="text-[#1c2b68] font-semibold text-2xl mb-3">{title}</h3>

            <div className="bg-white rounded-2xl shadow-md p-5">
                {/* header mois */}
                <div className="flex items-center justify-between mb-3">
                    <button
                        onClick={goPrev}
                        aria-label="Mois précédent"
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-white shadow focus:outline-none"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="uppercase tracking-wide text-blueGray-600 text-lg font-medium text-center">
                        {monthName} {year}
                    </div>

                    <button
                        onClick={goNext}
                        aria-label="Mois suivant"
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-white shadow focus:outline-none"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* jours de la semaine (pilule) */}
                <div className="bg-blueGray-100 rounded-full px-3 py-2">
                    <div style={grid7} className="text-center text-xs font-semibold">
                        {week.map((d, i) => (
                            <div key={d} className={i === 0 ? "text-red-500" : "text-blueGray-500"}>
                                {d}
                            </div>
                        ))}
                    </div>
                </div>

                {/* grille dates */}
                <div className="mt-4" style={{ ...grid7, rowGap: 8 }}>
                    {cells.map((day, idx) => {
                        const isSunday = idx % 7 === 0;
                        const isToday =
                            day && year === today.y && month === today.m && day === today.d;
                        const isSelected = day && selectedDay === day;

                        return (
                            <div key={idx} className="flex items-center justify-center">
                                {day ? (
                                    <button
                                        onClick={() => setSelectedDay(day)}
                                        className={[
                                            "w-9 h-9 flex items-center justify-center text-sm rounded-md transition",
                                            isSelected
                                                ? "bg-[#e8b6b6] text-[#6b1410] font-semibold"
                                                : "hover:bg-blueGray-100 text-blueGray-700",
                                            isSunday && !isSelected ? "text-red-500" : "",
                                            isToday && !isSelected ? "ring-2 ring-[#1c2b68]" : "",
                                        ].join(" ")}
                                    >
                                        {day}
                                    </button>
                                ) : (
                                    <span className="w-9 h-9" />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* événements du jour sélectionné (optionnel) */}
                {selectedDay && eventMap[selectedDay] && (
                    <div className="mt-4 space-y-2">
                        {eventMap[selectedDay].map((e, i) => (
                            <div key={i} className="text-sm text-blueGray-700">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#1c2b68] mr-2" />
                                {e.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
