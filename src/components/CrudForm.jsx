import React, { useState, useEffect } from 'react';

const initialForm = {
    name: "", 
    email: "",
    id: null
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        } else{
            setForm(initialForm)
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.name || !form.email){
            alert("Complete all the required fields");
            return;
        }
        if(form.id === null){
            createData(form);
        }else {
            updateData(form);
        }
        handleReset();
    }

    return ( 
        <div>
            <h3>{dataToEdit ? "Edit a register" : "Add a register"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' value={form.name} onChange={handleChange} />
                <input type="text" name='email' placeholder='Email' value={form.email} onChange={handleChange} />
                <input type="submit" value="Send"/>
                <input type="reset" value="Clear" onClick={handleReset}/>
            </form>
        </div>
     );
}
 
export default CrudForm
