import React, { Fragment } from 'react'
import '../App.css'
/*banner images*/
import uno from '../assets/1.jpg'
import dos from '../assets/2.jpg'
import tres from '../assets/3.jpg'
/*components*/
import Services from '../components/services'
import Shape from '../components/shape'
/*Pages*/
import About from './about'
import Contact from './contact'

function Home(){
    return(
        <Fragment >
            <section id="banner">
            <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={uno} className="d-block w-100 inner-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h6 className="display-6">Implementación montaje redes de mediana y baja tensión</h6>
                </div>
                </div>
                <div className="carousel-item">
                <img src={dos} className="d-block w-100 inner-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h6 className="display-6">Suministro de equipos de telecomunicaciones</h6>
                </div>
                </div>
                <div className="carousel-item">
                <img src={tres} className="d-block w-100 inner-img" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h6 className="display-6">Diseño e innovación en construcción de obras civiles y eléctricas</h6>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </section>

            <Shape />
            
            <section id="about">
                <h2 className="display-3 mt-3">Sobre nosotros</h2>
                <About />
            </section>

            <Shape />

            <section id="services">
            <h2 className="display-3 mt-3">Nuestros servicios</h2>
                <Services />
            </section>

            <Shape />

            <section id="contact">
            <h2 className="display-3 mt-3 mb-5">Contacto</h2>
                <Contact />
            </section>
        </Fragment>
    )
}

export default Home