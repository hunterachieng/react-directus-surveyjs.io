import React, {useState, useEffect} from 'react';
import * as Survey from 'survey-react';
Survey.StylesManager.applyTheme("modern");

const Form = ()=>{

    const [result, setResult] = useState([]);
    useEffect(()=>{
        fetch("http://127.0.0.1:8081/data/items/data/1?fields=form_data")
        .then(res=> res.json)
        .then(response=>{
            setResult(response)
        })
        .catch(error => console.log(error))
    });
    const handleSubmit = (survey)=>{
        console.log("Survey results: " + JSON.stringify(survey.data));
    }
     


    return(
       <Survey.Survey json={result} onComplete={handleSubmit} />
    )
    
}

export default Form




 
   

    
    
   

    

