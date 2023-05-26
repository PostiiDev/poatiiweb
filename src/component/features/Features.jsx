import React from 'react'
import './feature.scss'
function Features() {
  return (
    <div className='features'>
      <div className="container">
        <div className="left">
            <h1>Find the perfect enterprise for your demande</h1>
            <div className="search">
                <div className="seachInput">
                    <img src=" ../../../public/img/mman.png" alt="" />
                    <input type="text" placeholder='type here to search for it '/></div>
            </div>
            <button>Search</button>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}

export default Features
