import { createContext, useContext, useRef, useState } from "react";

export const GeneralContext = createContext("");

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};

// export const GeneralContextProvider = ({ children }: any) => {
//   const [loading, setLoading] = useState(true);
//   const timelineSection = useRef();
//   const portfolioSection = useRef();
//   const servicesSection = useRef();
//   const contactSection = useRef();

//   return (
//     <GeneralContext.Provider
//       value={{
//         loading,
//         timelineSection,
//         portfolioSection,
//         servicesSection,
//         contactSection,
//       }}
//     >
//       {children}
//     </GeneralContext.Provider>
//   );
// };
