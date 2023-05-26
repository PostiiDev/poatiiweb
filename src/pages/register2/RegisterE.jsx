import React, { useState } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import newRequest from '../../utils/newRequest'
import upload from '../../utils/upload'


function RegisterE() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    img:"",
    isEnterprise: false,
    phoneNumber: "",
    IBN: "",
    CNSS: "",
    matricule: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleEntreprise = (e) => {
    setUser((prev) => {
      return { ...prev, isEnterprise: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If you're uploading the image file to a cloud storage (like Cloudinary),
    // you can use the `upload` function here to get the image URL.
    const url = await upload(file);
    console.log("Image URL:", url);

    // Then, you can include this URL in the form data sent to the backend.
    try {
      const response = await newRequest.post("/auth/register", { ...user, img: url });
      console.log("Response from server:", response);

      // console.log(user)
     
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="register">
      <form onSubmit={handleSubmit}> 
        <div className="left">
          <h1>Création du nouveau compte</h1>
          <label htmlFor="">Name</label>
          <input
            name="name"
            type="text"
            placeholder="tappez votre nom"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" placeholder="tappez votre mot de passe" onChange={handleChange} /> 
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])}/> 
          <label htmlFor="">numero telephone</label>
          <input
            name="phoneNumber"
            type="text"
            placeholder="tappez votre numero telephone"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>Tantque entreprise</h1>
          <div className="toggle">
            <label htmlFor="">activer registre tanque entreprise</label>
            <label className="switch">
              <input type="checkbox" name="isEnterprise" onChange={handleEntreprise}  />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Ibn</label>
          <input
            name="IBN"
            type="text"
            placeholder="tappez numero Ibn de votre societe" 
            onChange={handleChange}
          />
          <label htmlFor="">CNSS</label>
          <input
            placeholder="tappez le nom de votre entreprise"
            name="CNSS"
        
            onChange={handleChange}
          />
          <label htmlFor="">Matricule</label>
          <input
            placeholder="tappez l'adresse de votre entreprise"
            name="matricule"
        
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default RegisterE;