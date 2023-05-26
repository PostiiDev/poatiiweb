import React from 'react'
import "./BodyFirst.scss"


const BodyFirst = () => {
    return (
    <div className='Body'>
        <div className="container">
            <div className="gauche">
                <h1>trouvez les meilleurs services <br/> en ligne pour votre business.</h1>
            <div className="recherche">
                <div className="rechercheinput">
                    <img src="./images/search.png" alt="" />
                    <input type="text" placeholder='chercher votre service' />
                </div>
                <button>recherche</button>
            </div>
            </div>
            <div className="droit">
                <img src="./images/580b585b2edbce24c47b29e8.png" alt="" />
            </div>
        </div>
    </div>
    )
}

export default BodyFirst