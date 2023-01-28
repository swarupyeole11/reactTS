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
        