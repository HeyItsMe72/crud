import React, { useState } from 'react';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id: 1,
        name: "Lucía",
        email: "lucia@email.com"
    }, 
    {
        id: 2,
        name: "Julio",
        email: "Julio@email.com"
    },
    {
        id: 3,
        name: "David",
        email: "David@email.com"
    },
    {
        id: 4,
        name: "Jacqueline",
        email: "Jacqueline@email.com"
    },
    {
        id: 5,
        name: "Skrapy",
        email: "Skrapy@email.com"
    },
]
const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) =>{
        data.id = Date.now()
        setDb([...db, data]);
    }

    const updateData = (data) => {
        let newData = db.map(el=> el.id === data.id ? data : el);
        setDb(newData);
    }

    const deleteData = (data) => {}


    return ( 
        <div>
            <h2>CRUD App</h2>
            <CrudForm updateData={updateData} createData={createData} deleteData={deleteData} 
            dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
     );
}
 
export default CrudApp;