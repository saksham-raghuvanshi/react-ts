import { FC } from "react";
import Page from "./Components/Page";
import "./index.css"
import Form from "./Components/Form";


const App : FC = (): JSX.Element =>{
    return <div className="wrapper main">
        <Page/>
        <Form />
    </div>

}

export default App;