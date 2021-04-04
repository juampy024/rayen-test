import React from 'react';
import { Link } from 'react-router-dom';

const TutorialList = ({tutoriales}) => {

  
    return (
        <>
                {tutoriales.map((tutorial, index) => (
         
                       <Link to={{pathname: '/tutorial-details', tutorial}}>
                        <li className ="list--element" key={tutorial.id}>
                            <p className="course--name">{tutorial.nombre}</p>
                            <p className="course--author">{tutorial.profesor}</p>
                            <p className="course--date">{tutorial.fecha}</p>
                        </li>
                        </Link>
                 
                ))}
           
        </>
    )
}

export default TutorialList;
