import React, { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);   
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    
    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form, 
            [name] : value,
        })
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm);
        if(Object.keys(errors).length === 0){
            alert("Sending Email...");
            setLoading(true);
            helpHttp().post("https://formsubmit.co/ajax/c.luciaesteves72@gmail.com", {
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: form
                }).then(res=>{
                    setLoading(false);
                    setForm(initialForm);
                    setResponse(true);
                    setTimeout(() => {
                        setResponse(false);
                    }, 5000);
                })
        } else return;
        
            
    }

    

    return({
        form, errors, loading, response, handleBlur, handleChange, handleSubmit
    })
}