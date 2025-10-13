


import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/accel_logo.png";
import Avatar from "../../assets/img/nasr_new.jpg"; // ajoute ton image utilisateur ici

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* fond exact Figma */}
      <nav style={{ backgroundColor: "#20264e" }}>
        <div className="mx-auto w-full px-6">
          {/* hauteur + centrage strict */}
          <div className="h-20 flex items-center justify-between">
            {/* LEFT : logo + title */}
            <Link to="/" className="flex items-center min-w-0" style={{ columnGap: "40px" }}>
              <img
                src={Logo}
                alt="AccelConnect"
                className="h-10 w-10 object-contain"
              />
              <span className="text-white text-4xl font-semibold tracking-wide whitespace-nowrap">
                AccelConnect
              </span>
            </Link>

            {/* CENTER : search pill */}
            <div className="flex-1 flex justify-center px-6">
              <div className="w-full" style={{ maxWidth: 660 }}>
                <div className="relative">
                  <input
                    id="site-search"
                    type="search"
                    placeholder="Rechercher..."
                    className="w-full rounded-full bg-white text-[15px] placeholder-gray-500"
                    style={{
                      height: 52,
                      paddingLeft: 20,
                      paddingRight: 52,
                      boxShadow:
                        "0 2px 6px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(0,0,0,0.04)",
                    }}
                  />
                  {/* icône loupe */}
                  <button
                    type="button"
                    aria-label="Rechercher"
                    className="absolute flex items-center justify-center rounded-full"
                    style={{
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      height: 36,
                      width: 36,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="h-5 w-5"
                      style={{ color: "#1e293b" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT : avatar utilisateur */}
            <div className="flex items-center">
              <button className="h-12 w-12 rounded-full overflow-hidden border-2 border-white/20 shadow-sm">
                <img
                  src={Avatar}
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}



// /* eslint-disable */
// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "assets/img/accel_logo.png";
// import UserPhoto from "assets/img/nassour.jpg"; // ← ajoute ton image ici

// export default function IndexNavbar() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">
//       <nav className="bg-[#20264e]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="h-20 flex items-center justify-between">
//             {/* LEFT : logo + title */}
//             <Link to="/" className="flex items-center gap-3">
//               <img
//                 src={Logo}
//                 alt="AccelConnect"
//                 className="h-10 w-10 object-contain"
//               />
//               <span className="text-white text-2xl font-semibold tracking-wide">
//                 AccelConnect
//               </span>
//             </Link>

//             {/* CENTER : search bar */}
//             <div className="flex-1 flex justify-center px-6">
//               <div className="w-full max-w-xl">
//                 <div className="relative">
//                   <input
//                     id="site-search"
//                     type="search"
//                     placeholder="Rechercher..."
//                     className="w-full rounded-full bg-white text-sm placeholder-gray-500 py-3 pl-6 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//                   />
//                   <button
//                     type="button"
//                     className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center hover:scale-95 transition"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 text-gray-700"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT : photo utilisateur */}
//             <div className="flex items-center">
//               <button className="h-12 w-12 rounded-full overflow-hidden border-2 border-white/20 shadow-sm">
//                 <img
//                   src={UserPhoto}
//                   alt="User"
//                   className="h-full w-full object-cover"
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
