import React, { useState, useEffect } from 'react';

const initialForm = {
    name: "", 
    email: "",
    id: null
}

const CrudForm = () => {
    const [form, setForm] = useState(initialForm);

    const handleChange = () => {}
    const handleReset = () => {}
    const handleSubmit = () => {}

    return ( 
        <div>
            <h3>Add a register</h3>
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
