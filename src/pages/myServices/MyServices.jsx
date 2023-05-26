import React from 'react'
import "./MyServices.scss"
import { Link } from "react-router-dom";
import getCurrentUser from '../../utils/getCurrentUser.js'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";


const MyServices = () => {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myOffres"],
    queryFn: () =>
      newRequest.get(`/offre/mine?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/offre/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myOffres"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myGigs">
    {isLoading ? (
      "loading"
    ) : error ? (
      "error"
    ) : (
   <div className="container">
      <div className="title">
        <h1>{currentUser ? "Gigs" : "Orders"}</h1>
        {currentUser && (
          <Link to={`/addoffre/${currentUser._id}`}>
            <button>Add New Offre</button>
          </Link>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>prix</th>
            <th>Propositions</th>
            <th>delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        {data.map((offre) => (
        <tr key={offre._id}>
          <td>
            <img
              className="image"
              src={offre.cover}
              alt=""
            />
          </td>
          <td>{offre.title}</td>
          <td>{offre.prix}</td>
          <td>
          <Link to={`/propositions/${offre._id}`}>
            {offre.proposals.length}
            {offre.proposals}
          </Link>
          </td>
          <td>
            <img className="delete" src="./images/delete.png" 
            onClick={() => handleDelete(offre._id)}
            alt="" />
          </td>
          <td>
          <Link className='link' to={`/editOffre/${offre._id}`}>
            <img className="delete" src="./images/delete.png"  width="100%" height="100%"
            alt="" />
          </Link>
          </td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
    )}
  </div>
  )
  }
  
  export default MyServices;
