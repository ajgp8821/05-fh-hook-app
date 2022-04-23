import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('trigger');

    return (
        <small>{ value }</small>
    )
}
)