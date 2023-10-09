import ReactDOM  from "react-dom/client";

import App from "./App";


const rootConatiner = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(rootConatiner)
root.render(<App/>)
