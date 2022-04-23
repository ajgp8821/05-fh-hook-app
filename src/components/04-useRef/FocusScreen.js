import React, { useRef } from 'react';

import './effects.css';

export const FocusScreen = () => {

    const inputRef = useRef()
    console.log(inputRef);
    
    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
        // document.querySelector('input').select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type='text'
                className='form-control'
                placeholder='Your Name'
            />

            <button
                className='btn btn-outline-primary mt-5'
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}
