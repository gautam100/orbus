import { useState } from 'react'
import Wrapper from './components/Wrapper'
import ControlledComponent from './components/ControlledComponent'
import Loops from './components/Loops'
import Checkbox from './components/Checkbox'
import Radiobtn from './components/radiobtn'
import Dropdown from './components/Dropdown'

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
      <hr />
      <Checkbox />
      <hr />
      <Radiobtn />
      <hr />
      <Dropdown />
    </>
  )
}

export default App
