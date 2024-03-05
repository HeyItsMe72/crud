import { useState } from 'react'
import CrudApp from './components/CrudApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Ejercicios React: CRUD</h1>
      <CrudApp/>
    </>
  )
}

export default App
