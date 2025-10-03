// import React from "react";
// import Logo from "assets/img/accel_logo.png";
// export default function Footer() {
//   return (
//     <>
//       <footer className="relative bg-[#20264e] pt-8 pb-6">
//         <div
//           className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
//           style={{ transform: "translateZ(0)" }}
//         >
//           <svg
//             className="absolute bottom-0 overflow-hidden"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="none"
//             version="1.1"
//             viewBox="0 0 2560 100"
//             x="0"
//             y="0"
//           >

//           </svg>
//         </div>
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap text-center lg:text-left">
//             <div className="w-full lg:w-4/12 px-4">
//               <h4 className="text-3xl font-semibold">Powered by</h4>
//               <img
//                 src={Logo}
//                 alt="AccelConnect"
//                 className="h-20 w-20 object-contain"
//               />

//             </div>
//             <div className="w-full lg:w-4/12 px-4">
//               <div className="flex flex-wrap items-top mb-6">
//                 <div className="w-full lg:w-4/12 px-4 ml-auto">
//                   <span className="block  text-blueGray-500 text-sm font-semibold mb-2">
//                     Liens utiles                  </span>
//                   <ul className="list-unstyled">
//                     <li>
//                       <img src='assets/img/accel_logo' />

//                       <a
//                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                         href="https://www.creative-tim.com/presentation?ref=nr-footer"
//                       >
//                         Red Hat Enterprise Linux
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                         href="https://blog.creative-tim.com?ref=nr-footer"
//                       >
//                         Openshift AI
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                         href="https://www.github.com/creativetimofficial?ref=nr-footer"
//                       >
//                         Heritage Cloud
//                       </a>
//                     </li>

//                   </ul>
//                 </div>
//                 <div className="w-full lg:w-4/12 px-4">
//                   <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
//                     Contacts
//                   </span>
//                   <ul className="list-unstyled">
//                     <li>
//                       <a
//                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                         href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
//                       >
//                         33.000.00.00
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
//                         href="https://creative-tim.com/terms?ref=nr-footer"
//                       >
//                         www.example.com                      </a>
//                     </li>

//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr className="my-6 border-blueGray-300" />

//           <div className="mt-6 lg:mb-0 mb-6">
//             <button
//               className="bg-white text-lightBlue-00 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
//               type="button"
//             >
//               <i className="fab fa-facebook"></i>
//             </button>
//             <button
//               className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
//               type="button"
//             >
//               <i className="fab fa-facebook-square"></i>
//             </button>
//             <button
//               className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
//               type="button"
//             >
//               <i className="fab fa-dribbble"></i>
//             </button>
//             <button
//               className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
//               type="button"
//             >
//               <i className="fab fa-github"></i>
//             </button>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }



/* eslint-disable */
import React from "react";

// ——— Images (mets les bons chemins vers tes PNG) ———
import AccelLogo from "assets/img/accel_logo.png";
import IconLink from "assets/img/link.png";
import IconPhone from "assets/img/phone.png";
import IconMail from "assets/img/mail.png";
import IconGlobe from "assets/img/globe.png";
import IconFb from "assets/img/facebook.png";
import IconIn from "assets/img/linkedin.png";
import IconYt from "assets/img/youtube.png";

export default function Footer() {
  return (
    <footer className="bg-[#1c2340] text-white">
      {/* Partie haute avec 3 colonnes */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

        {/* Col 1 : Powered By */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-8">Powered By</h3>
          <img
            src={AccelLogo}
            alt="Accel"
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* Col 2 : Liens utiles */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-8">Liens utiles</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <img src={IconLink} alt="" className="h-6 w-6 object-contain opacity-90" />
              <a href="#" className="text-lg hover:underline">
                Red Hat Enterprise Linux
              </a>
            </li>
            <li className="flex items-center gap-4">
              <img src={IconLink} alt="" className="h-6 w-6 object-contain opacity-90" />
              <a href="#" className="text-lg hover:underline">
                Openshift AI
              </a>
            </li>
            <li className="flex items-center gap-4">
              <img src={IconLink} alt="" className="h-6 w-6 object-contain opacity-90" />
              <a href="#" className="text-lg hover:underline">
                Heritage Cloud
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 : Contacts */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-8">Contacts</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <img src={IconPhone} alt="" className="h-6 w-6 object-contain opacity-90" />
              <span className="text-lg">33.000.00.00</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={IconMail} alt="" className="h-6 w-6 object-contain opacity-90" />
              <span className="text-lg">xxx@example.com</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={IconGlobe} alt="" className="h-6 w-6 object-contain opacity-90" />
              <span className="text-lg">www.example.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ligne réseaux sociaux */}
      <div className="border-t border-white/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8 flex justify-center gap-16">
          <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
            <img src={IconFb} alt="Facebook" className="h-7 w-7" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <img src={IconIn} alt="LinkedIn" className="h-7 w-7" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:scale-110 transition-transform">
            <img src={IconYt} alt="YouTube" className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}
