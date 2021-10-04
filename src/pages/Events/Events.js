import React from 'react'

const Events = (props) => {

    return(
        <div className='col-md-6'>
            <h3> {props.title}</h3>
            <p>{props.id}</p>
            <p>{props.date}</p>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Events;