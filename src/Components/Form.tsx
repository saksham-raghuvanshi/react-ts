import { eventNames } from "process";
import { FC ,ChangeEventHandler, useState,FormEventHandler} from "react";
import Button from "./Button";


interface Props{

}

const Form: FC<Props> =(): JSX.Element=>{
    const [value,setValue] = useState("");
    const [file , setFile] = useState<File>();

    const handleOnChange:ChangeEventHandler<HTMLInputElement> = (event) =>{
        setValue(event.target.value);

    }

    const handleSubmit:FormEventHandler<HTMLFormElement> = (event) =>{
        event.preventDefault();
        console.log(value);
    }
    return <form className="form" onSubmit={handleSubmit}>

<input className="border padding-10" type="file"  onChange={({target})=>{
    const{files} = target;
    if(files){
        const file = files[0];
        setFile(file);
    }

}}/>
        <input className="border padding-10" type="text" value={value} onChange={handleOnChange}/>
        <div className="padding-10" />
        <Button value="Submit"/> 
        
    </form>
}

export default Form;