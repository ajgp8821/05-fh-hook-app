import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0});

    const { x, y } = coords;

    useEffect(() => {
        
        const mouseMove = (e) => {
            // console.log(e);
            const coords = { x: e.x, y: e.y}
            // console.log(coords);
            setCoords( coords );
            // console.log(' XD ');
        }
        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            // console.log('Componente desmontado');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    

    return (
        <div>
            <h3>Message</h3>
            <p>
                x:{ x } y: { y }
            </p>
        </div>
    )
}
