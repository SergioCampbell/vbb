import React, { Fragment } from 'react'
import '../App.css'
import contact2 from '../assets/contact2.jpg'

function Contact(params) {
    return(
        <Fragment>
            <div className="container img-contact" id="contact">
                <form className="row g-3">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-black">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text-black">Deja tu mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="We want to get your services."></textarea>
                <button type="button" className="btn btn-outline-info btn-lg opacity-75 mt-3 rounded-pill text-black">Enviar</button>
                </div>
                </form>
            </div>
        </Fragment>
    )
}

export default Contact