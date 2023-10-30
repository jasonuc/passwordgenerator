import { useState } from 'react'
import PasswordOptions from './components/PasswordOptions'
import Generate from './components/Generate'
import PasswordDisplay from './components/PasswordDisplay'
import './App.css'

function App() {

  const [password, setPassword] = useState('Password appears here...');
  const [constraints, setConstraints] = useState({
    "Numbers": null, "LowerCase": null, "UpperCase": null, "Symbols (e.g. $ $ ^ & ) > < / ` \" @": null, "Spaces": null
  })

  return (
    <div className='h-screen bg-slate-300 p-4 box-border flex flex-col items-center gap-y-10'>
      <h1 className=' text-3xl md:text-4xl font-oswald uppercase font-bold text-center'>Password Generator</h1>
      <PasswordOptions />
      <Generate setPassword={setPassword} />
      <PasswordDisplay password={password} />
    </div>
  )
}

export default App
