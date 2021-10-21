import React from 'react'
import logo from '../assets/logovbb.png'
import './components.css'

function Nav (){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <img src={logo} alt="VBB Ingenieria" className="img-fluid"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li class="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Top</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#about">Nosotros</a>
                    </li>
                    <li class="nav-item">
                    <a className="nav-link" href="#services">Servicios</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">Contacto</a>
                    </li>
                </ul>
                </div>
                <span className="navbar-text">Experiencia en interventoría nos permite cumplir con la entrega de las obras.</span>
            </div>
        </nav>
    )
}

export default Nav