import {React} from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const TutorialDetails = () => {
    
       const {tutorial} = useLocation();


    return (
        <div className="tutorial--details">
             <div className="page--title">  
             <Link to="/"> <FontAwesomeIcon icon={faChevronLeft} /> </Link> 
             Detalle Tutorial 
             <Link to={{pathname: '/modify-tutorial', tutorial}}><FontAwesomeIcon icon={faEdit} /></Link></div> 
            <form className="form">
                <label className="special--label">
                    <input
                        className="input--form"
                        type="text"
                        name="titulo"
                        id="titulo"
                        key="titulo"
                        placeholder="titulo"
                        value={tutorial.nombre}
                        disabled/>
                        <span className="placeholder">Titulo</span>
                </label>
                <label>
                <input
                        className="input--form"
                        type="text"
                        name="profesor"
                        id="profesor"
                        key="profesor"
                        placeholder="profesor"
                        value={tutorial.profesor}
                        disabled/>
                </label>
                <label>
                <input
                        className="input--form"
                        type="text"
                        name="materia"
                        id="materia"
                        key="materia"
                        placeholder="materia"
                        value={tutorial.materia}
                        disabled/>
                </label>
                <label>
                <input
                        className="input--form"
                        type="text"
                        name="fecha"
                        id="fecha"
                        key="fecha"
                        placeholder="mm/dd/yyyy"
                        value={tutorial.fecha}
                        disabled/>
                              
                </label>
            </form>
        </div>
    )
}

export default TutorialDetails;



