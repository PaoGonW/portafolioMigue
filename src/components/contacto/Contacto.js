import React, { useRef } from 'react';
import { NavBar } from '../navBar/NavBar'

export const Contacto = ({ localitation }) => {
    const initialNav = NavBar({ localitation });
    const initialNavRef = useRef(null);
    initialNavRef.current = initialNav;
    return (
        <section
            id="Contacto"
            ref={initialNavRef}
            className={`contact ${initialNavRef.current ? 'section-show' : ''}`}
        >
            <div className="container">
                <div className="section-title">
                    <h2>Contacto</h2>
                </div>
                <div className="row mt-2">
                    <form className="contentEmail mt-4" id="ContactoForm" method="post">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="email" className="form-control txtContact" name="email" id="email" placeholder="Correo Electrónico" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="text" className="form-control" name="asunto" id="asunto" placeholder="Asunto" required />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 form-group">
                                <input type="text" name="nombre" className="form-control" id="nombre" placeholder="Nombre" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="number" name="telefono" className="form-control" id="telefono" placeholder="Numeró de telefono" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="mensaje" id="mensaje" rows="5" placeholder="Mensaje" required></textarea>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit">Enviar Correo</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
}

export default Contacto;