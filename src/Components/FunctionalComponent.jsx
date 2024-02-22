import { useParams } from "react-router-dom";

export default function FunctionalComponent(props){
    const {id, number} = useParams();
    return <>
    <h2 style={{color:"green"}}> Hello from Funcional Component {props.name}</h2>
    <div>This is your id : {id}</div>
    <div>This is your number : {number}</div>
    </>
}