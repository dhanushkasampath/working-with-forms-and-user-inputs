import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const{
        value: enteredName,
        isValid: enteredNameIsValid,//"enteredNameIsValid" is called alias
        hasError:nameInputHasError,
        valueChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '');//this trim function do not execute here. but it pass as a param.

    const{
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError:emailInputHasError,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.includes('@'));

    let formIsValid = false;//this is the overall form validity variable

    if(enteredNameIsValid && enteredEmailIsValid){//only if both are valid, overall form is treated as valid
        formIsValid = true;
    }
    const formSubmissionHandler = event => {
        event.preventDefault();//this is to prevent reloading

        if(!enteredNameIsValid){
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);

        resetNameInput();
        resetEmailInput();
    }

    const btnOnClickHandler = () => {
        console.log("button clicked");
    }

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text'
                       id='name'
                       onChange={nameInputChangeHandler}
                       onBlur={nameInputBlurHandler}
                       value={enteredName}/>
                {nameInputHasError && <p className="error-text">name must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-mail</label>
                <input type='email'
                       id='email'
                       onChange={emailInputChangeHandler}
                       onBlur={emailInputBlurHandler}
                       value={enteredEmail}/>
                {emailInputHasError && <p className="error-text">Please enter a valid email</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} onClick={btnOnClickHandler}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
