import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {

    const { counter, increment, decrement } = useCounter (1);

    const url = `https://www.breakingbadapi.com/api/quotes/${ counter }`;

    const { data } = useFetch( url );

    const { quote } = !!data && data[0];

    const pTag = useRef()

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
      
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <h1>Breaking Bad</h1>
            <hr />

            <blockquote className='blockquote text-right'>
                <p
                    className='mb-0'
                    ref={ pTag }
                >
                    { quote }
                </p>
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

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

        </div>
    )
}
