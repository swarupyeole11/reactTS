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


const Person4:FC<Props> = (props) => {

    const [country, setCountry] = useState<string| null | number>("")


  return (
    <>
       <div>{Person4.name}</div>
       <input type="text" placeholder='Write down you own country' onChange={(event)=>{setCountry(event.target.value)}}/>
      

       {country}
    </>
   
  )
}

export default Person4