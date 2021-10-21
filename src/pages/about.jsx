import React, { Fragment } from 'react'
import '../App.css'
import aboutUs from '../assets/contact.jpg'

function About(params) {
    return(
        <div className="container">
            <div className="row">

                    <img src={aboutUs} alt="Somos VBB Ingenieria" className="img-thumbnail about "/>
               
                <div className="col">
                    <p>
                    Somos una empresa colombiana con amplia experiencia y comprometida con el 
                    diseño e innovación en la construcción de obras civiles y eléctricas, de la 
                    mano de alta calidad y cuidando la sustentabilidad ambiental.
                    </p>
                    <p>
                    VBB Ingeniería S.A.S.
                    Busca atender todas las necesidades del cliente. Al cuidado para el diseño, la 
                    adaptación a las novedades del mercado y los mejores elementos de 
                    seguridad, se une el afán de la compañía por desarrollar modelos que 
                    respeten el medio ambiente. Está a la vanguardia de los cambios
                    en modelos, diseños, montajes y desarrollos que viene de la mano con
                    la globalizaciónen el ámbito de la construcción de obras civiles y eléctricas
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About