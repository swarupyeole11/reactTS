# reactTS
### To start a react app in the typescript using vite use the command : npm create@vite latest after this follow the steps mentioned 

# How to access the project : 
           1) git clone <URL of the code>
           2) cd <reactTs>
           3) npm install 
           4) npm run dev

# What are the changes the 

## Change 1 : The way you access the props
interface Props {
    name : string,
    age : number,
    email : string,
    getName? : (name: string) => string  //Now this is prpertru is optional to pass

}

THe interface we define basically states that the Person component will be abel to take input of those fileds only. 

const Person: FC<Props> = (props) =>{
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
        </div>
    )
}

## Change2 : The way to use hooks

import React, { useState } from 'react'
import {FC} from 'react'
interface Props {
    name : string,
    age : number,
    email : string,
    getName? : (name: string) => string  //Now this is prpertru is optional to pass
}

const Person2:FC<Props> = (props) => {

    const [country, setCountry] = useState<string| null | number>("")

    /* If you pass the paraemter you have to sepcify the datatype in ts */
    const handleChange = (event :React.ChangeEvent<HTMLInputElement> ) =>{
        setCountry(event.target.value)
    }

  return (
    <>
       <div>{Person2.name}</div>
       <input type="text" placeholder='Write down you own country' onChange={(event)=>{setCountry(event.target.value)}}/>
       <input type="text" placeholder='Write down you own country' onChange={handleChange}/>

       {country}
    </>
   
  )
}

export default Person2

## Change3 : For limited set of values which you want you can use enums and type

/*Code In Person3.tsx*/

import React, { useState } from 'react'
import {FC} from 'react'

 export enum HairColor{
    Blonde = "Your Hair id blonde",
    Brown = "carramel latte",
    Pink = "great color"
}

interface Props {
    name : string,
    age : number,
    email : string,
    getName? : (name: string) => string  //Now this is prpertru is optional to pass,
    hairColor : HairColor

}   




const Person3:FC<Props> = (props) => {

    const [country, setCountry] = useState<string| null | number>("")


  return (
    <>
       <div>{Person3.name}</div>
       <input type="text" placeholder='Write down you own country' onChange={(event)=>{setCountry(event.target.value)}}/>
      

       {country}
    </>
   
  )
}

export default Person3


/*Code In App.tsx*/
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
