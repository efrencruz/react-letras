import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ guardarBusquedaletra }) => {
    const [busqueda, guardarBusqueda] = useState({ artista: '', cancion: '' });
    const [error, guardarError] = useState(false);

    const { artista, cancion } = busqueda;

    const actualizarState = e => {
        guardarBusqueda({ ...busqueda, [e.target.name]: e.target.value });
    };

    const buscarInformacion = e => {
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarBusquedaletra(busqueda);
    };

    return (
        <div className="bg-info">
            <div className="container">
                {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
                <div className="row">
                    <form onSubmit={buscarInformacion} className="col card text-white bg-transparent mb-5 pt-5 pb-5">
                        <fieldset>
                            <legend className="text-center">Buscador de letras de canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre del artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        ></input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre de la canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

Formulario.propTypes = {
    guardarBusquedaletra: PropTypes.func.isRequired
};

export default Formulario;
