// import api from "../services/api";
// import { useEffect, useState } from "react";

// export const useApiUser = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;
//     api
//       .get("/all")
//       .then((response) => {
//         if (isMounted) {
//           setUser(response.data);
//         }
//       })
//       .catch((err) => {
//         if (isMounted) {
//           console.error("Ops! Ocorreu um erro: " + err);
//           setError(err);
//         }
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   return { user, error };
// };
