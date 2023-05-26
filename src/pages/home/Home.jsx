import React from 'react'
import './home.scss'
// import Features from '../../component/features/Features'

import BodyFirst from '../../component/bodyFirst/BodyFirst'
import Slide from '../../component/slide/Slide'
import CategCard from '../../component/categCard/CategoCard'
import {cards, projects} from "../../data";
import Contact from '../../component/contact/Contact'
import ProjectCard from '../../component/projectCard/ProjectCard'



const Home = () => {
  return (
  <div className='home'>
      <BodyFirst/>
      <h1>Notre Service</h1>
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map((card) => (
          <CategCard key={card.id} card={card} />
      ))}
      </Slide>
      
      <div className="features dark">
      <div className="container">
        <div className="item">
          <h1>
            liverr <i>business</i>
          </h1>
          <h1>
            A business solution designed for <i>teams</i>
          </h1>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="title">
            
            Connect to freelancers with proven business experience
          </div>

          <div className="title">
            
            Get matched with the perfect talent by a customer success manager
          </div>

          <div className="title">
            
            Manage teamwork and boost productivity with one powerful workspace
          </div>
        </div>
        <div className="item">
          <img src="./images/pexels-christina-morillo-1181715.jpg" alt="" />
        </div>
      </div>
    </div>
      <h1>Some OF OUR PROJECTS</h1>

     <Slide slidesToShow={4} arrowsScroll={4}>
      {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
      ))}
      </Slide>
    <Contact/>
    <div className="down">
      <h1>title</h1>
      <p>qfqfqfqcfqq fdqfcqqc csqfxqcx dSXQFXF</p>
      <p>*****</p>
    </div>
  </div>
  )
}

export default Home
