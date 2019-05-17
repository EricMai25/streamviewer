import React from 'react'

const messages = (props) =>{
    return(
        <div>
            <span>{props.msg.user}</span>
            <p>{props.msg.message}</p>
        </div>
    )
}

export default messages;