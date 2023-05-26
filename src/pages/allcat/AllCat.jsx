import React from 'react'
// import ProjectCard from '../../component/projectCard/ProjectCard'
import {cards} from "../../data"; //, projects
import CategCard from '../../component/categCard/CategoCard'
import Slide from '../../component/slide/Slide'
// import Features from '../../component/features/Features'

function AllCat() {
  return (
    <div>
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map((card) => (
          <CategCard key={card.id} card={card} />
      ))}
      </Slide> <Slide slidesToShow={5} arrowsScroll={5}>
        
      {cards.map((card) => (
          <CategCard key={card.id} card={card} />
      ))}
      </Slide> 
    </div>
  )
}

export default AllCat
