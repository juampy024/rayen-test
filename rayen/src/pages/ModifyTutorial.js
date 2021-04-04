import {React, useState, useEffect} from 'react';
import validate from '../components/ValidateInfo';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useHistory } from 'react-router-dom';

const ModifyTutorial = () => {
    const history = useHistory();
    const {tutorial} = useLocation();
    const [tutorialsValues, settutorialsValues] = useState({
        titulo: tutorial.nombre,
        profesor:tutorial.profesor,
        materia:tutorial.materia,
        fecha: tutorial.fecha
    }
    );
    const [errors, setErrors] = useState({});
    const [isSubmitting, setisSubmitting] = useState(false);


   const handleChange = e =>{
        const {name, value} = e.target;
        settutorialsValues({
            ...tutorialsValues,
            [name]: value,

        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(tutorialsValues));
        setisSubmitting(true);
        
    }
    const deleteTutorial = () =>{
        fetch('https://rayentutorialtestapp.azurewebsites.net/deletetutorial/6' + tutorial.id, {
            method: 'DELETE',

        }).then(() =>{
            history.push('/');
        })
    }

useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
 
        fetch('https://rayentutorialtestapp.azurewebsites.net/updatetutorial/6' + tutorial.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body:  JSON.stringify(tutorialsValues)
        }).then(()=>{
            
            history.push('/');
            
        })
     };
}, [errors])

 
    return (
        <div className="add--Tutorial">
            <div className="page--title">
                
            <Link to="/"> <FontAwesomeIcon icon={faChevronLeft} /> </Link>  Modificar Tutorial</div>
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
                <button onClick={deleteTutorial} className="form-input-buttom-left" 
                    >Eliminar</button>
                <button type="submit" className="form-input-buttom" 
                    >Modificar</button>
                </div>
               
            </form>
        </div>
    )
}

export default ModifyTutorial;
