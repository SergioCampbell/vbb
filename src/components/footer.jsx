import React from 'react'
import '../App.css'
import logo from '../assets/logovbb.png'
import sacv from '../assets/logosacv.png'

function Footer(params) {
    return(
        <section id="footer">
            <div className="container-fluid footer mt-5">
                <div className="row">
                    <div className="col">
                        <img src={logo} alt="logo vbb ingenieria logo-footer" className="logo-footer" />
                    </div>
                    <div className="col">
                        <h4>Contacto</h4>
                        <ul>
                            <ol>
                            <i class="fas fa-map-marked-alt"></i> &nbsp; Carrera 25 No 18-25
                            </ol>
                            <ol>
                            <i class="fas fa-map-marker"></i> &nbsp; Sincelejo - Sucre 
                            </ol>
                            <ol>
                            <i class="fas fa-phone-alt"></i> &nbsp;  278 6841 – 310 7069204
                            </ol>
                            <ol>
                            <i class="fas fa-at"></i> &nbsp;  gerencia@vbbingenieria.com

                            </ol>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <span className="text-secondary">Handcrafted and develop by <a href="https://sergiocampbell.github.io/sacv" target="_blank">
                    <img src={sacv} alt="logo-sacv-developer" className="img-sacv"/>
                    </a></span>
                </div>
            </div>
        </section>
    )
}

export default Footer