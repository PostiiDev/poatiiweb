// import React from "react";
// import "./GigCard.scss";
// import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest"

// const GigCard = ({ item }) => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: [item.userId],
//     queryFn: () =>
//       newRequest.get(`/user/${item.userId}`).then((res) => {
//         return res.data;
//       }),
//   });
//   return (
//     <Link to={`/oneoffre/${item._id}`} className="link">
//       <div className="gigCard">
//         <img src={item.cover} alt="" />
//         <div className="info">
//           {isLoading ? (
//             "loading"
//           ) : error ? (
//             "Something went wrong!"
//           ) : (
//             <div className="user">
//               <img src={data.images || "/img/noavatar.jpg"} alt="" />
//               <span>{data.username}</span>
//             </div>
//           )}
//           <p>{item.Description}</p>         
//         </div>
//         <hr />
//         <div className="detail">
//           <img src="./img/heart.png" alt="" />
//           <div className="price">
//             <span>STARTING AT</span>
//             <h2>$ {item.prix}</h2>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default GigCard;

import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest"

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery(["offre", item.offreId], () =>
    newRequest.get(`/offre/`).then((res) => res.data),
    {
      enabled: !!item.userId,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Link to={`/oneoffre/${item._id}`} className="link">
             <div className="gigCard">
         <img src={item.cover} alt="" />
         <div className="info">
           {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.images || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.Description}</p>         
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.prix}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
