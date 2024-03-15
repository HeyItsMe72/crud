import { useState } from 'react'
import CrudApp from './components/CrudApp'
import CrudApi from './components/CrudApi'
import SongSearch from './components/SongSearch'
import SelectsAnidados from './components/SelectsAnidados'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ejercicios React: CRUD</h1>
      <CrudApp/>
      <hr />
      {/* <CrudApi/> */}
      <hr />
      <SongSearch/>
      <hr />
      <SelectsAnidados/>
    </>
  )
}

export default App
