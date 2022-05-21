import {useState} from "react";

const SimpleInput = (props) => {

    const[enteredName, setEnteredName] = useState('');
    const[enteredNameTouched, setEnteredNameTouched] = useState(false);

    const[enteredEmail, setEnteredEmail] = useState('');
    const[enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const enteredEmailIsValid = enteredEmail.includes('@');
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if(enteredNameIsValid && enteredEmailIsValid){//only if both are valid, overall form is treated as valid
        formIsValid = true;
    }
    const formSubmissionHandler = event => {
        event.preventDefault();//this is to prevent reloading

        setEnteredNameTouched(true);//this need to turn to true once the submit button is clicked. as we assume all
        // fields are touched

        if(!enteredNameIsValid){
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);

        setEnteredName('');
        setEnteredNameTouched(false);

        setEnteredEmail('');
        setEnteredEmailTouched(false);
    }

    const btnOnClickHandler = () => {
        console.log("button clicked");
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    }

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    }

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       onBlur={nameInputBlurHandler}
                       value={enteredName}/>
                {nameInputIsInvalid && <p className="error-text">name must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-mail</label>
                <input type='email'
                       id='email'
                       onChange={emailInputChangeHandler}
                       onBlur={emailInputBlurHandler}
                       value={enteredEmail}/>
                {emailInputIsInvalid && <p className="error-text">Please enter a valid email</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} onClick={btnOnClickHandler}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
