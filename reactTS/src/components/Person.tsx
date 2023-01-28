import React from 'react'
import { FC } from 'react'
interface Props {
    name : string,
    age : number,
    email : string,
    getName? : (name: string) => string  //Now this is prpertru is optional to pass

}

//another way to represent same thing 
const Person: FC<Props> = (props) =>{
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
        </div>
    )
}



// const Person = (props: Props) => {
//   return (
//     <div>{props.name}</div>

//   )
// }

export default Person