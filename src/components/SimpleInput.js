import {useState, useRef} from "react";

const SimpleInput = (props) => {

    const nameInputRef = useRef();//the last value will be returned
    const[enteredName, setEnteredName] = useState('');
    const[enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const[enteredNameTouched, setEnteredNameTouched] = useState(false);
    // const[formIsValid, setFormIsValid] = useState(false); //having more states is a disadvantage.

    let formIsValid = false;

    if(enteredNameIsValid){
        console.log('Name Input is valid');
        formIsValid = true;
    }
    const formSubmissionHandler = event => {
        event.preventDefault();//this is to prevent reloading

        setEnteredNameTouched(true);//this need to turn to true once the submit button is clicked. as we assume all
        // fields are touched

        if(enteredName.trim() === ''){
            setEnteredNameIsValid(false);
            return;
        }
        setEnteredNameIsValid(true);
        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        setEnteredName('');//this is to empty the input field after the form is submitted
        //same can be done by useRef also. but its not nice as useState
        // nameInputRef.current.value = '';  <-here we directly manipulating the dom here. which is not ideal to do
    }

    const btnOnClickHandler = () => {
        console.log("button clicked");
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
        if(enteredName.trim() !== ''){
            setEnteredNameIsValid(true);
        }
    }

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
        if(enteredName.trim() === ''){
            setEnteredNameIsValid(false);
        }
    }

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef}
                       type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       onBlur={nameInputBlurHandler}
                       value={enteredName}/>
                {nameInputIsInvalid && <p className="error-text">name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} onClick={btnOnClickHandler}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
