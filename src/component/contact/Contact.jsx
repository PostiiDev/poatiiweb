import React from 'react'
import "./Contact.scss";

const Contact = () => {
    return (
    <div className="contact">
            <div className="container">
                <div className='gauche'>
                    <img src="./images/contact.png" alt="" />
                </div>
                <div className='droit'>
                    <h4 className="text">CONTACT</h4>
                    <h1 className="text">Prenez Contact Avec Nous</h1>
                    <div className="input-contact">
                        <input type="text" placeholder='Nom et prénom' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='sujet' />
                        <textarea cols="30" rows="7" placeholder="Message"></textarea>
                        <button>Envoyer le message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact