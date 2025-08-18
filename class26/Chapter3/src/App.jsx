import { useState } from 'react'
import Wrapper from './components/Wrapper'
import ControlledComponent from './components/ControlledComponent'
import Loops from './components/Loops'

function App() {

  return (
    <>
      <Wrapper>
        <strong>Hello React!</strong>
      </Wrapper>

      <Wrapper color='green'>
        <strong>Hello React!</strong>
      </Wrapper>

      <Wrapper color='yellow'>
        <strong>Hello React!</strong>
      </Wrapper>
      <hr />
      <ControlledComponent />
      <Loops />
    </>
  )
}

export default App
