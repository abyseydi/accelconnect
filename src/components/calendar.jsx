import React, { useMemo, useState } from "react";
import "assets/styles/tailwind.css";

const range = (n) => [...Array(n).keys()];

export default function PrettyCalendar({
    initialYear,
    initialMonth,
    selectedDay: selectedDayProp,
    title = "Un jour spécial pour ?",
    events = [],
}) {
    const now = useMemo(() => new Date(), []);
    const nowY = now.getFullYear();
    const nowM = now.getMonth() + 1;
    const nowD = now.getDate();

    const initialY = initialYear ?? nowY;
    const initialM = initialMonth ?? nowM;

    const [year, setYear] = useState(initialY);
    const [month, setMonth] = useState(initialM);

    const initialSelected =
        selectedDayProp ??
        (initialY === nowY && initialM === nowM ? nowD : null);

    const [selectedDay, setSelectedDay] = useState(initialSelected);

    React.useEffect(() => {
        if (year === nowY && month === nowM) {
            if (selectedDayProp === undefined || selectedDayProp === null) {
                setSelectedDay(nowD);
            }
        }
        else if (selectedDayProp === undefined || selectedDayProp === null) {
            setSelectedDay(null);
        }
    }, [year, month, nowY, nowM, nowD, selectedDayProp]);


    const monthIdx = month - 1;
    const firstWeekday = new Date(year, monthIdx, 1).getDay();
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

    const monthName = new Date(year, monthIdx, 1).toLocaleString("fr-FR", { month: "long" });
    const week = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];

    const goPrev = () => {
        if (month === 1) {
            setYear(y => y - 1);
            setMonth(12);
        } else {
            setMonth(m => m - 1);
        }
    };
    const goNext = () => {
        if (month === 12) {
            setYear(y => y + 1);
            setMonth(1);
        } else {
            setMonth(m => m + 1);
        }
    };

    const grid7 = { display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))" };


    const placeholderImage = "https://placehold.co/48x48/F7F7F7/FF5733?text=🎂";

    return (
        <div className="w-full" style={{ maxWidth: 400 }}>
            <div className="bg-white rounded-2xl shadow-md p-5">
                <div className="flex items-center justify-between mb-3">
                    <button onClick={goPrev} aria-label="Mois précédent"
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-blueGray-100 transition">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="uppercase tracking-wide text-blueGray-600 text-lg font-medium text-center">
                        {monthName.charAt(0).toUpperCase() + monthName.slice(1)} {year}
                    </div>

                    <button onClick={goNext} aria-label="Mois suivant"
                        className="h-9 w-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-blueGray-100 transition">
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor">
                            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* jours de la semaine (pilule) */}
                <div className="bg-blueGray-100 rounded-full px-3 py-2">
                    <div style={grid7} className="text-center text-xs font-semibold">
                        {week.map((d, i) => (
                            <div key={d} className={i === 0 ? "text-red-500" : "text-blueGray-500"}>{d}</div>
                        ))}
                    </div>
                </div>

                {/* dates */}
                <div className="mt-4" style={{ ...grid7, rowGap: 8 }}>
                    {cells.map((day, idx) => {
                        const isSunday = idx % 7 === 0;
                        const isToday = day && year === nowY && month === nowM && day === nowD;
                        const isSelected = day && selectedDay === day;

                        let columnTextColor;
                        if (isToday) {
                            columnTextColor = "";
                        } else if (isSunday) {
                            columnTextColor = "text-red-500";
                        } else {
                            columnTextColor = "text-blueGray-700";
                        }

                        return (
                            <div
                                key={idx}
                                className={`flex items-center justify-center ${columnTextColor}`}
                            >
                                {day ? (
                                    <button
                                        onClick={() => setSelectedDay(day)}
                                        className={[
                                            isToday ? "w-10 h-10 p-1" : "w-9 h-9",
                                            "flex items-center justify-center text-sm rounded-md transition",

                                            isToday && isSelected
                                                ? "bg-[#fda9a9] text-[#6b1410] font-semibold shadow-md"
                                                : isSelected
                                                    ? "bg-[#e8b6b6] text-[#6b1410] font-semibold"
                                                    : isToday
                                                        ? "bg-[#fda9a9] text-[#6b1410] font-semibold shadow-md"
                                                        : "hover:bg-blueGray-100",

                                            !isSelected && !isToday ? "hover:scale-105" : "",

                                        ].join(" ")}
                                    >
                                        {day}
                                    </button>
                                ) : (
                                    <span className={isToday ? "w-10 h-10" : "w-9 h-9"} />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* événements */}
                {selectedDay && eventMap[selectedDay] && (
                    <div className="mt-4 pt-4 border-t border-blueGray-100 space-y-2">
                        <p className="text-xs font-semibold uppercase text-blueGray-500">
                            Événements du {selectedDay} {monthName.substring(0, 3)}.
                        </p>
                        {eventMap[selectedDay].map((e, i) => (
                            <div key={i} className="text-sm text-blueGray-700 flex items-start">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#1c2b68] mr-2 mt-1 shrink-0" />
                                {e.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>


        </div>
    );
}
