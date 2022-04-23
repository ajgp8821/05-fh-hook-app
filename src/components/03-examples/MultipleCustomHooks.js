import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

    const { loading, data } = useFetch( url );

    const { author, quote } = !!data && data[0];

    // console.log(counter);
    // console.log(author, quote);
    // console.log(data);

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                (
                    <>
                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'> { quote } </p>
                            <footer className='blockquote-footer'> { author }</footer>
                        </blockquote>

                        { (counter !== 1) && 
                            <button 
                                className='btn btn-primary mr-1'
                                onClick={decrement}
                            >
                                Previous quote
                            </button>
                        }

                        <button 
                            className='btn btn-primary'
                            onClick={increment}
                        >
                            Next quote
                        </button>
                    </>
                )
            }

        </div>
    )
}
