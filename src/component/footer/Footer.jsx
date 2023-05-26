import React from 'react'
import "./footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="bottom">
          <div className="left">
            <img className='left-img' src="/images/logo.png" alt="" />
            <span>© Posti National . 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/pinterest.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
