// /*eslint-disable*/
// import React from "react";
// import { Link } from "react-router-dom";
// // components

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

// export default function Navbar(props) {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   return (
//     <>
//       <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
//         <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <Link
//               to="/"
//               className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
//             >
//               Notus React
//             </Link>
//             <button
//               className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
//               type="button"
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <i className="fas fa-bars"></i>
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
//               (navbarOpen ? " block" : " hidden")
//             }
//             id="example-navbar-warning"
//           >
//             <ul className="flex flex-col lg:flex-row list-none mr-auto">
//               <li className="flex items-center">
//                 <a
//                   className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                   href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar"
//                 >
//                   <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
//                   Docs
//                 </a>
//               </li>
//             </ul>
//             <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//               <li className="flex items-center">
//                 <IndexDropdown />
//               </li>
//               <li className="flex items-center">
//                 <a
//                   className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                   href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
//                   target="_blank"
//                 >
//                   <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
//                   <span className="lg:hidden inline-block ml-2">Share</span>
//                 </a>
//               </li>

//               <li className="flex items-center">
//                 <a
//                   className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                   href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
//                   target="_blank"
//                 >
//                   <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
//                   <span className="lg:hidden inline-block ml-2">Tweet</span>
//                 </a>
//               </li>

//               <li className="flex items-center">
//                 <a
//                   className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                   href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
//                   target="_blank"
//                 >
//                   <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
//                   <span className="lg:hidden inline-block ml-2">Star</span>
//                 </a>
//               </li>

//               <li className="flex items-center">
//                 <button
//                   className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
//                   type="button"
//                 >
//                   <i className="fas fa-arrow-alt-circle-down"></i> Download
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/accel_logo.png";
import Avatar from "../../assets/img/avatar.jpg"; // ajoute ton image utilisateur ici

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
              <button className="h-12 w-12 rounded-full overflow-hidden border-2 border-white/30 shadow-md">
                <img
                  src={Avatar}
                  alt="user avatar"
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
