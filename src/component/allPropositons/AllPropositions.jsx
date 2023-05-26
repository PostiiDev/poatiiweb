import React from 'react'
import "./allPropositions.scss"
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const AllPorpositions = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["RecivedPropositions"],
    queryFn: () =>
      newRequest.get(`/proposition/all/${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Propositions</h1>
        </div>
        <table>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Prix</th>
            <th>Accept</th>
          </tr>
          {isLoading ? (
            <tr><td>Loading...</td></tr>
          ) : error ? (
            <tr><td>Error: {error.message}</td></tr>
          ) : (
            data.map((proposition) => (
              <tr>
                <td>{proposition.buyerId}</td>
                <td>{proposition.msg}</td>
                <td>{proposition.prix}</td>
                <td>{proposition.isCompleted}</td>
              </tr>
            ))
          )}
        </table>
      </div>
    </div>
  )
}

export default AllPorpositions;
