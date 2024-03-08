import React, { useEffect, useState } from 'react';

import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';


const CrudApi = () => {
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/users";

    useEffect(()=>{
        api.get(url)
        .then((res)=>!res.ok ? setDb(res) : setDb([]))
    }, [])

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
            <h2>CRUD API</h2>
            <CrudForm updateData={updateData} createData={createData} deleteData={deleteData} 
            dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
     );
}
 
export default CrudApi;