import { FC } from "react";


interface Props {
    value:string;
    // onClick: ()=>void;
    onClick?: ()=>void; //by ? this you can make it optional 

}

// const Button :FC = ({value}:{value:string}):JSX.Element =>{
//     return <button className="calc-btn border">
//         {value}
//     </button>
    
// }

const Button :FC<Props> = ({value, onClick}):JSX.Element =>{
    return <button onClick={onClick} className="calc-btn border">
        {value}
    </button>
    
}


export default Button;