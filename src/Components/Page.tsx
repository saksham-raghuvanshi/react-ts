import { FC } from "react";
import Button from "./Button";
import ButtonWrapper from "./ButtonWrapper";

const Page: FC = ():JSX.Element =>{
    return(
        <div className="border padding-10">
            <div className="calculator-screen border">
                <span>0</span>
                <span className="result">0</span>
            </div>


            <ButtonWrapper>
                <Button value="1"/>
                <Button value="2"/>
                <Button value="3"/>
            </ButtonWrapper>
            
            <ButtonWrapper>
                <Button value="4"/>
                <Button value="5"/>
                <Button value="6"/>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button value="7"/>
                <Button value="8"/>
                <Button value="9"/>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button value="0"/>
                <Button value="+"/>
                <Button value="-"/>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button value="*"/>
                <Button value="/"/>
                <Button value="="/>
            </ButtonWrapper>
            
            
            
            {/* <div className="btn-wrapper">
                <button className="calc-btn border">1
                </button>
                <button className="calc-btn border">2            
                </button>
                <button className="calc-btn border">3   
                </button>

            </div>
            <div className="btn-wrapper">
                <button className="calc-btn border">4
                </button>
                <button className="calc-btn border">5            
                </button>
                <button className="calc-btn border">6   
                </button>

            </div>
            <div className="btn-wrapper">
                <button className="calc-btn border">7
                </button>
                <button className="calc-btn border">8            
                </button>
                <button className="calc-btn border">9   
                </button>

            </div>
            <div className="btn-wrapper">
                <button className="calc-btn border">0
                </button>
                <button className="calc-btn border">+           
                </button>
                <button className="calc-btn border">-   
                </button>

            </div>
            <div className="btn-wrapper">
                <button className="calc-btn border">/
                </button>
                <button className="calc-btn border">*           
                </button>
                <button className="calc-btn border">=   
                </button>

            </div> */}
        </div>
    )
}

export default Page;