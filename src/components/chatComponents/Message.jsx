import React from 'react'

const messages = (props) =>{
    return(
        <div>
            <span>{props.msg.user.name}</span>
            <p>{props.msg.msg}</p>
        </div>
    )
}

export default messages;