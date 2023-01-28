import React, { useState } from 'react'
import {FC} from 'react'


interface Props {
    name : string,
    age : number,
    email : string,
    getName? : (name: string) => string  //Now this is prpertru is optional to pass,

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