import React from 'react';
import Input from './chatComponents/Input.jsx'
import Message from './chatComponents/Message.jsx'

class ChatRoom extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message : ''
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                <div>Chat Room</div>
                <div>
                    {this.props.msgs.map((item)=>{
                        return <Message msg={item}/>
                    })}
                </div>
                <Input/>
            </div>
        )
    }
}

export default ChatRoom;