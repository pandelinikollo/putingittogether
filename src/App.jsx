import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Product from './Components/Product'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <Product lastName="Doe" name='Jane'
                age={45}
                haircolor="black"
      />

      <Product lastName="Smith" name='John'
                age={88}
                haircolor="brown"
      />

    </>
  )
}

export default App
