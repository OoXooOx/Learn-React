import {useState} from "react";
import generateRandomNum from "../utils/GenerateRandomNum";


function RandomNumber ({x}) {
    console.log('rendered');
    const [randomNumber, setRandomNumber] = useState(generateRandomNum(x));

    const change = ()=>{
        setRandomNumber(generateRandomNum(x))
    }
    return (
        <div>
            <h1>
            {randomNumber}
        </h1>       
        <button onClick={change}>Generate new Random number</button>
        </div>
    )

}
export  default RandomNumber;