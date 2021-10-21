import React from 'react'
import './components.css'
import Elements from './elements'

function Services(params) {
    return(
        <section id="services" className="container mt-3">
           <div className="row row-cols-1 row-cols-md-5 g-4">
               <div className="col">
               <div className="card">
                <div className="card-body">
                <h3><i class="fas fa-bolt"></i></h3>
                <h5 className="card-tittle">Mantenimiento y Montajes de redes de mediana y baja tensión.</h5>
                    <p className="card-text">
                        <a href="#" target="_blank">Info aquí.</a>
                     </p>
                </div>
            </div>
               </div>

           
               <div className="col">
               <div className="card">
                <div className="card-body">
                <h3><i class="fas fa-truck-pickup"></i></h3>
                <h5 className="card-tittle">Arrendamiento de Maquinaria para Construcción.</h5>
                <p className="card-text">
                        <a href="#" target="_blank">Info aquí.</a>
                     </p>
                </div>
            </div>
               </div>
          

           
               <div className="col">
               <div className="card">
                <div className="card-body">
                <h3><i class="fas fa-project-diagram"></i></h3>
                <h5 className="card-tittle">Suministros e instalación de redes eléctricas.</h5>
                <p className="card-text">
                        <a href="#" target="_blank">Info aquí.</a>
                     </p>
                </div>
            </div>
               </div>
          

           
               <div className="col">
               <div className="card">
                <div className="card-body">
                <h3><i class="fas fa-globe"></i></h3>
                <h5 className="card-tittle">Mantenimiento y Montaje de redes de Internet.</h5>
                <p className="card-text">
                        <a href="#" target="_blank">Info aquí.</a>
                     </p>
                </div>
            </div>
               </div>
           
               <div className="col">
               <div className="card">
                <div className="card-body">
                <h3><i class="fas fa-broadcast-tower"></i></h3>
                <h5 className="card-tittle">Suministro de equipo de comunicaciones.</h5>
                <p className="card-text">
                        <a href="#" target="_blank">Info aquí.</a>
                     </p>
                </div>
            </div>
               </div>

          </div>

          <Elements />
        </section>
    )
}

export default Services