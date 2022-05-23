import {useState} from "react";

//this is a custom hook
const useInput = (validateValue) => {//here "validateValue" is a function
    const[enteredValue, setEnteredValue] = useState('');
    const[isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset//retrun the reset function as a value in the return object
    }
}

export default useInput;