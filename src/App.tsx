import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'

export default function App() {

  const [name, setName] = useState<string>('')

  return (
    <>
    <h1>React</h1>
    <p>nome: {name}</p>
    <input type="text" onChange={(e) => setName(e.target.value)} />
    <Button icon={true}>abrir</Button>
    <Button action='danger'>fechar</Button>
    <Button action='success'>salvar</Button>
    </>
  )
}
