import { useState } from "react";
import CalculatorKey from "./keys";
import './styles.css';


export default  function Calculator() {
   const [currentValue, setCurrentValue] = useState(0);
   const [prevValue, setPrevValue] = useState(0);
   const [operation, setCurrentOperation]=useState(null);


    const handUserAction = (value)=> {
        console.log('value: ', value);
        if(value === 'clear'){
            setCurrentValue(0);
            setCurrentOperation(null);
            setPrevValue(0)
            return;
        }

        if (value === ".") {
            setCurrentValue(currentValue + ".");
            return;
        }

        if(value === '=' ){
            //check if op
            let calValue = CalculatorOperations[operation](parseFloat(prevValue),parseFloat(currentValue))
            console.log('currentValue: ', currentValue);
            console.log('prevValue: ', prevValue);
            console.log('CalculatorOperations[operation]: ', CalculatorOperations[operation]);
            setCurrentValue(calValue);
            setCurrentOperation(null)
            return;
        }

        if(CalculatorOperations[value]){
            setCurrentOperation(value)
            setPrevValue(currentValue)
            setCurrentValue(value)
            console.log(CalculatorOperations[value])
        } else {
            //setCurrentOperation(null)

            setCurrentValue(
                (!CalculatorOperations[currentValue] && currentValue) ? `${currentValue}${value}` : value
            )

        }
    };

    const CalculatorOperations = {
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "=": (firstValue, b) => b,
    };

    return (
        <div className="calculator">
          <div className="calculator-input">
            <div className="result">{currentValue} </div>
          </div>
          <div className="calculator-keypad">
            <div className="keys-function">
              <CalculatorKey value={"clear"} keyValue={"c"} onClick={handUserAction} />
              {/* <CalculatorKey keyValue={"±"} onClick={handUserAction} />
              <CalculatorKey keyValue={"%"} onClick={handUserAction} /> */}
            </div>
            <div className="keys-operators">
              <CalculatorKey keyValue={"+"} onClick={handUserAction} />
              <CalculatorKey keyValue={"-"} onClick={handUserAction} />
              <CalculatorKey keyValue={"*"} onClick={handUserAction} />
              <CalculatorKey keyValue={"/"} onClick={handUserAction} />
              <CalculatorKey keyValue={"="} onClick={handUserAction} />
            </div>
            <div className="keys-numbers">
              <CalculatorKey keyValue={9} onClick={handUserAction} />
              <CalculatorKey keyValue={8} onClick={handUserAction} />
              <CalculatorKey keyValue={7} onClick={handUserAction} />
              <CalculatorKey keyValue={6} onClick={handUserAction} />
              <CalculatorKey keyValue={5} onClick={handUserAction} />
              <CalculatorKey keyValue={4} onClick={handUserAction} />
              <CalculatorKey keyValue={3} onClick={handUserAction} />
              <CalculatorKey keyValue={2} onClick={handUserAction} />
              <CalculatorKey keyValue={1} onClick={handUserAction} />
              <CalculatorKey
                className="key-dot"
                keyValue={"."}
                onClick={handUserAction}
              />
              <CalculatorKey
                className="key-zero"
                keyValue={0}
                onClick={handUserAction}
              />
            </div>
          </div>
        </div>
      );
}