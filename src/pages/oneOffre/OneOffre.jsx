import React from 'react'
import './OneOffre.scss'
import { Slider } from "infinite-react-carousel/lib";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from '../../utils/newRequest';

function OneOffre() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(['offre', id], () =>
    newRequest.get(`/offre/single/${id}`).then((res) => res.data),
    {
      enabled: !!id,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  const { title, Description, userId, category, images, deadline, prix, comments } = data; // adjust these according to your actual data structure

  
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">{category}</span>
          <h1>{title}</h1>
          <div className="user">
            <img
              className="pp"
              // src={user.profilePicUrl}
              // alt={user.username}
            />
            {/* <span>{user.username}</span> */}
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="offre"
              />
            ))}
          </Slider>
          <h2>About This Request</h2>
          <p>
            <strong>{Description}</strong>
          </p>
          <div className="seller">
            <h2>About The Requester</h2>
            <div className="user">
              <img
                // src={user.profilePicUrl}
                // alt={user.username}
              />
            </div>
          </div>
          <div className="reviews">
            <h2>Comments</h2>
            {/* {comments.map((comment, index) => (
              // render comments here...
            ))} */}
            <textarea
              name="commmetn"
              id=""
              placeholder="Brief descriptions to introduce your service "
              cols="0"
              rows="16"
            ></textarea>
          </div>
         <label htmlFor="">Description</label>
            <textarea
              name="Description"
              id=""
              placeholder="Brief descriptions to introduce your service "
              cols="0"
              rows="16"
            ></textarea>
        </div>
        <div className="right">
          <div className="price">
            <h3>{title}</h3>
            <h2>{prix}</h2>
          </div>
          <p>
            {Description}
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{deadline}</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
        {/* <div className="right">
          <div className="price">
            <h3>{title}</h3>
            <h2>{prix}</h2>
          </div>
          <p>
            {Description}
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{deadline}</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <button>Continue</button>
        </div> */}
      </div>
  
    </div>
  );
}

export default OneOffre;
