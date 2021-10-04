import {React, Component } from 'react'
import Events from './Events'

function EventList() {

    const event = [
        {
            id: 1,
            title: "Event 1",
            date:"01/21/21",
            description:"Sign in. Use your Google Account. Email or phone. Forgot email? Type the text you hear or see. Not your computer? Use Guest mode to sign in privately."
        },
        {
            id: 2,
            title: "Event 2",
            date:"12/24/21",
            description:"Sign in. Use your Google Account. Email or phone. Forgot email? Type the text you hear or see. Not your computer? Use Guest mode to sign in privately."
        },
        {
            id: 3,
            title: "Event 3",
            date:"12/23/21",
            description:"Sign in. Use your Google Account. Email or phone. Forgot email? Type the text you hear or see. Not your computer? Use Guest mode to sign in privately."
        },
        {
            id: 4,
            title: "Event 4",
            date:"12/07/21",
            description:"Sign in. Use your Google Account. Email or phone. Forgot email? Type the text you hear or see. Not your computer? Use Guest mode to sign in privately."
        }
    ]


        return(
            <div className="container">
                <div className="row">
                {
                   event.map(
                       function (item, i) {
                           return   <Events id={item.id} title={item.title} date={item.date} description={item.description}/>
                       }
                   )
               }
                </div>
               

            </div>
        )
    
}

export default EventList;