import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { Link,  useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';


function NavBar() {
  const [active, setActive] = useState(false);
  const [open, setopen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(currentUser)
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
            <Link to="/" className='link'>
            <h1>Postii</h1>
            </Link>
        </div>
        <div className="links">
          <Link to="/" className='link'>
            <span>Home</span>
          </Link>
          {currentUser?.isEnterprise && <Link to="/allcat" className='link'>
            <span>categories</span>
          </Link>}
          <Link to="/about" className='link'>
            <span>about us</span>
          </Link>
          {!currentUser && <Link to="/login" className='link'>
            <button>Sign in</button>
          </Link>}
          {!currentUser && <Link to="/registerE" className='link'>
            <button>Sign Up</button>
          </Link>}
          {currentUser && (
            <div className="user" onClick={()=>setopen(!open)}>
              <img src={currentUser.img  || "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"}  alt=""/>
              <span>{ currentUser?.name}</span>
              {open && <div className="options">
              {currentUser.isEnterprise && (
                    <Link to={`/propositions/sent/${currentUser._id}`} className='link'>
                      <span>the propositions I sent</span>
                    </Link>
                  )}
                <Link to={`/propositions/received/${currentUser._id}`} className='link'>
                <span>the propositions I received</span>
              </Link>
                <Link className='link' to={`/myoffres/${currentUser._id}`}><span>My Ofrres</span></Link>
                <Link className='link' to={`/addoffre/${currentUser._id}`}><span>add offre</span></Link>
                <Link className='link' onClick={handleLogout}><span>log out</span></Link>
                {/* <Link className='link' to="/mymessages"><span>my Messages</span></Link> */}
              </div>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar;
