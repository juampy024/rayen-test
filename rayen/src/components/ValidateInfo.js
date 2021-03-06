export default function validate(values) {
    let errors = {}
    if(!values.titulo.trim()){
        errors.titulo = "Titulo es requerido";
    }
    if(!values.profesor.trim()){
        errors.profesor = "Profesor es requerido";
    }
    if(!values.materia.trim()){
        errors.materia = "materia es requerido";
    }

    if(!dateValidator(values.fecha)){
        errors.fecha = "escriba la con el formato mm/dd/aaaa";
    }

    return errors;
}

function dateValidator(dateString){      
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;      
          
    // Match the date format through regular expression      
    if(dateString.match(dateformat)){      
        let operator = dateString.split('/');      
      
        // Extract the string into month, date and year      
        let datepart = [];      
        if (operator.length>1){      
            datepart = dateString.split('/');      
        }      
        let month= parseInt(datepart[0]);      
        let day = parseInt(datepart[1]);      
        let year = parseInt(datepart[2]);      
              
        // Create list of days of a month      
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
        if (month===1 || month>2){      
            if (day>ListofDays[month-1]){      
                ///This check is for Confirming that the date is not out of its range      
                return false;      
            }      
        }else if (month===2){      
            let leapYear = false;      
            if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                leapYear = true;      
            }      
            if ((leapYear === false) && (day>=29)){      
                return false;      
            }else      
            if ((leapYear===true) && (day>29)){      
                console.log('Invalid date format!');      
                return false;      
            }      
        }      
    }else{      
        console.log("Invalid date format!");      
        return false;      
    }      
    return true;      
} 
