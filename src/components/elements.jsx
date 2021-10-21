import React from 'react'
/*clientes*/
import one from '../assets/clientes/aguas-dela-sabana.jpg'
import two from '../assets/clientes/Alcaldía municipal de los palmitos.jpg'
import three from '../assets/clientes/Captura.PNG'
import four from '../assets/clientes/Consorcio_ingeniar.jpg'
import five from '../assets/clientes/galeras.jpg'
import six from '../assets/clientes/index.png'
import seven from '../assets/clientes/Logo-Independence.png'
import eight from '../assets/clientes/LogoTolu.jpg'
import nine from '../assets/clientes/Obras-y-diseños.jpg'
import ten from '../assets/clientes/scala.jpg'
import eleven from '../assets/clientes/Servicios_civiles.png'

import Shape from '../components/shape'

function Elements(params) {
    return(
        <section className="container mt-4 g-2" id="elements">
            <div className="row mt-5">
                <div className="col">
                <h4>CONSTRUCCIÓN OBRAS CIVILES</h4>
                    <p>
                    Nuestra experiencia nos permite ofrecer servicios de dirección técnica,
                    administrativa y de construcción de proyectos tales como: pavimentos en
                    concreto hidráulico, edificios y/o instituciones escolares, redes eléctricas 
                    de media y baja tensión para radio bases. El desarrollo de nuestro
                    sistema operativo,que permite tener un estricto control de la calidad de los
                    procesos, materiales, tiempo y recursos en general.
                    </p>
                </div>

                <div className="col">
                <h4>INTERNET</h4>
                    <p>
                    Somos líderes en el proceso de montaje 
                    de estructuras para la instalación de 
                    antenas de redes de Internet, suministro 
                    de insumos, y equipos Mikrotik, 
                    direccional y bidireccionales.
                    </p>
                </div>

                <div className="col">
                <h4>TELEFONÍA MÓVIL</h4>
                    <p>
                    Implementación de la red Servicios 
                    integrados de implementación y puesta 
                    en servicio (On-Air) 2G (GSM) - 3G 
                    (UMTS) - 4G (LTE) - 5G, Modernización 
                    de Equipos de Red.

                    </p>
                </div>
            </div>

            <div className="row mt-5">
            <div className="col">
                <h4>SERVICIOS DE GESTIÓN DE TECNOLOGÍAS DE INFORMACIÓN IT </h4>
                    <p>
                    Ofrece servicios administrados por TI que 
                    respaldan el ciclo de vida total de la 
                    infraestructura de TI, desde la 
                    planificación y el diseño hasta la 
                    implementación, las operaciones, la 
                    seguridad y el mantenimiento. Soluciones 
                    tecnológicas robustas y escalables 
                    manteniendo actualizado los requisitos y 
                    prioridades de su negocio. Ya sea que 
                    estemos desarrollando y refinando la 
                    funcionalidad, implementando nuevas 
                    capacidades, optimizando las 
                    operaciones existentes o rediseñando los 
                    sistemas heredados, brindamos 
                    seguridad cibernética, software, 
                    movilidad, ingeniería e integración y 
                    servicios administrados por TI adaptados 
                    a sus diversas necesidades.
                    </p>
                </div>

                <div className="col">
                <h4>SERVICIOS DE COMUNICACIONES</h4>
                    <ul className="list-group-flush">
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Redes WiFi (Analítica de presencia, Marketing WiFi).</li>
                   <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Instalaciones de facilidades especiales para comunicaciones.</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Torres de comunicaciones.</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Centros de mando y control.</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Centros de conferencias / salas.</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Infraestructura de instalaciones.</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Generación de energía Sostenible
                    (Energía Solar).</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Generación de energía (comercial, 
                    batería, UPS y generadores).</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Sistemas de puesta a tierra.</li>
                    </ul>
                </div>

                <div className="col">
                <h4>NUEVA INFRAESTRUCTURA</h4>
                    <p>
                    Instalación / implementación de infraestructura,
                    equipos y elementos de red, conforme a espe
                    cificacionestécnicas / documento técnico de
                    soporte.
                    Expansiones de red.
                    Ampliación de Infraestructura.
                    Reemplazo de equipos/infraestructura
                    (modernizaciones)
                    Revisión/inspección, atención & mantenimiento
                    técnico de equipos e infraestructura de red (O &
                    M).
                    Site clean-up - logística inversa de equipos y
                    materiales.

                    </p>
                </div>
            </div>

            <Shape />
            <div className="container ">
                <div className="row">
                <div className="col mt-3">
                <h3>OFERTA CLAVE</h3>
                <p>
                Nuestra experiencia nos 
                permite ofrecer servicios de 
                dirección técnica,
                administrativa y de
                construcción de proyectos:
                </p>
                <ul className="list-group-flush">
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Pavimentos en concreto hidráulico.</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Edificios y/o Instituciones escolares.</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Montaje de redes eléctrica de media y 
                    baja tensión.</li>
                    <li className="list-group-item"><i class="fas fa-check fa-sm"></i> Montaje de redes de Internet</li>
                </ul>

                <p>
                El desarrollo de nuestro
                sistema operativo, que
                permite tener un estricto
                control de la calidad de los
                procesos, materiales, tiempo
                y recursos en general.
                </p>
                </div>

                <div className="col mt-3">
                    <h3>NUESTROS CLIENTES</h3>
                    <div className="gallery">
                    <img src={one} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 one" />
                    <img src={two} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 two" />
                    <img src={three} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 three" />
                    <img src={four} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 four" />
                    <img src={five} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 five" />
                    <img src={six} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 six" />
                    <img src={seven} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 seven" />
                    <img src={eight} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 eight" />
                    <img src={nine} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 nine" />
                    <img src={ten} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 ten" />
                    <img src={eleven} alt="clientes vbb ingenieria" className="rounded mx-auto d-block img-gallery opacity-75 eleven" /> 
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Elements