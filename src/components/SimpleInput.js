import {useState, useRef} from "react";

const SimpleInput = (props) => {

    const nameInputRef = useRef();//the last value will be returned
    const[enteredName, setEnteredName] = useState('');

    const formSubmissionHandler = event => {
        event.preventDefault();//this is to prevent reloading
        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);
        setEnteredName('');//this is to empty the input field after the form is submitted
        //same can be done by useRef also. but its not nice as useState
        // nameInputRef.current.value = '';  <-here we directly manipulating the dom here. which is not suppose to do

    }

    const btnOnClickHandler = () => {
        console.log("button clicked");
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
        // console.log(enteredName);
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='form-control'>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
            </div>
            <div className="form-actions">
                <button onClick={btnOnClickHandler}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
