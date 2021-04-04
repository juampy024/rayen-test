import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const UseForm = (callBack, validate) => {
const history = useHistory();
const [tutorialsValues, settutorialsValues] = useState({
    titulo:'',
    profesor:'',
    materia:'',
    fecha: ''
}
);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setisSubmitting] = useState(false);
    const [isPending, setisPending] = useState(false);


    const handleChange = e => {
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

 useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
 
           try{fetch('https://rayentutorialtestapp.azurewebsites.net/createtutorial', {
               method: 'POST',
               headers: { "Content-Type": "application/json"},
               body:  JSON.stringify(tutorialsValues)
           }).then(()=>{
               setisPending(false);
               history.push('/');
           
           })
        } catch (e){
            console.log(e);
        }

        };
    }, [errors])



    return (
        {handleChange, handleSubmit, tutorialsValues, errors, isPending}
    )
}
export default UseForm;