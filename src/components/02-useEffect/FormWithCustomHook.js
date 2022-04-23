import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useForm({
    const [ formValue, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValue;

    useEffect(() => {
        console.log('email cambió');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValue );
    }
    

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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

            <div className='form-group'>
                <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='**********'
                    value={ password }
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <button
                type='submit'
                className='btn btn-primary'
            >
                Save
            </button>

        </form>
    )
}
