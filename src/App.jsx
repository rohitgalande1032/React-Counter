import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Counter2 from './Counter2'
import UseReducer from './UseReducer'

function App() {
  return (
    <>
      {/* <div style={{marginBottom: '40px'}}>
        <Counter />
      </div>
      <div>
        <Counter2 />
      </div> */}

      <div>
        <UseReducer />
      </div>
    </>
  )
}

export default App
