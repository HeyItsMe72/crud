import { useState } from 'react'
import CrudApp from './components/CrudApp'
import CrudApi from './components/CrudApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ejercicios React: CRUD</h1>
      <CrudApp/>
      <hr />
      <CrudApi/>
    </>
  )
}

export default App
