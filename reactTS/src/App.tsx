import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Person from './components/Person'
import Person2 from './components/Person2'
import Person3 from './components/Person3'

import { HairColor } from './components/Person3'

import React from 'react'

const App = () => {
  return (
    <>
          <Person3 name='swa' age={23} email="x@goyz" hairColor={HairColor.Brown}/>
    </>
  )
}


export default App
