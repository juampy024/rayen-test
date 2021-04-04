import {React, useEffect, useState} from 'react';
import TutorialList from '../components/TutorialList';
import { Link } from 'react-router-dom';


const Home = () => {

    const [tutorials, setTutorials] = useState(null);
   

    useEffect(() => {
        fetch('https://rayentutorialtestapp.azurewebsites.net/tutorials')
        .then( res => {
          return  res.json();
        })
        .then((data)=> {
          
            setTutorials(data);
        }); 
    }, [])
    return (
        <div className="home">
            <div className="page--title">
                <p>Tutoriales</p>
            </div>
            <form className="form">
                <label>
                    <input
                     type="text"
                     name="search"
                     placeholder="Buscar por titulo"
                     />
                </label>
                <label className="selector">ordenado por:
                    <select>
                        
                        <option>
                            Titulo
                        </option>
                        <option>
                            Fecha
                        </option>
                    </select>
                </label>
                
                <div className="show--data">
                    <ul className="data">{ tutorials && <TutorialList tutoriales={tutorials} /> }</ul>
                </div>
                <button className="form-input-buttom">Eliminar Todos</button>
            </form>
                
            <div className="add--new--tutorial">
               <Link to="/add-new-tutorial"> <button className="addtutorial">+</button></Link>
            </div>
        </div>


    )
}

export default Home;