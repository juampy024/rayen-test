import {React} from 'react';
import UseForm from '../components/UseForm';
import validate from '../components/ValidateInfo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AddTutorial = ({submitForm}) => {
    
    const {handleChange, handleSubmit, tutorialsValues, errors, isPending} = UseForm(submitForm, validate);
    return (
        <div className="add--Tutorial">
            <div className="page--title">
                
            <Link to="/"> <FontAwesomeIcon icon={faChevronLeft} /> </Link>  Agregar Tutorial</div>
            <form className="form" onSubmit={handleSubmit}>
                <label className="special--label">
                    <input
                        className="input--form"
                        type="text"
                        name="titulo"
                        id="titulo"
                        key="titulo"
                        onChange={handleChange}
                        value={tutorialsValues.titulo}
                        />
                        <span className="placeholder">Titulo</span>
                        {errors && <p>{errors.titulo}</p>}
                </label>
                <label>
                <input
                        className="input--form"
                        type="text"
                        name="profesor"
                        id="profesor"
                        key="profesor"
                        placeholder="profesor"
                        onChange={handleChange}
                        value={tutorialsValues.profesor}
                        />
                        {errors && <p>{errors.profesor}</p>}
                </label>
                <label>
                <input
                        className="input--form"
                        type="text"
                        name="materia"
                        id="materia"
                        key="materia"
                        placeholder="materia"
                        onChange={handleChange}
                        value={tutorialsValues.materia}
                        />
                        {errors && <p>{errors.materia}</p>}
                </label>
                <label>
                <input
                        className="input--form"
                        type="text"
                        name="fecha"
                        id="fecha"
                        key="fecha"
                        placeholder="mm/dd/yyyy"
                        onChange={handleChange}
                        value={tutorialsValues.fecha}
                        />
                        {errors && <p>{errors.fecha}</p>}
                              
                </label>
                <div className="button--add">
                {!isPending ? <button type="submit" className="form-input-buttom" 
                    >Agregar</button>: <button disabled type="submit" className="form-input-buttom" 
                    >Agregando...</button> }
                </div>
               
            </form>
        </div>
    )
}

export default AddTutorial;


