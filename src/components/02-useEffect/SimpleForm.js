import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('hey!');
    }, []);
    
    useEffect( () => {
        console.log('hey form!');
    }, [formState]);
    
    useEffect( () => {
        console.log('hey email!');
    }, [email]);
    
    // useEffect( () => {
    //     console.log('hey name!');
    // }, [name]);

    const handleInputChange = ({ target }) => {
        // console.log(target.name);
        // console.log(target.value);

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Your Name'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <div className='form-group'>
                <input
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            { (name === '123') && <Message />}

        </>
    )
}
