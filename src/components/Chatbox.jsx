import React from 'react';

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
                    {this.props.msgs}
                </div>
                <div>
                    <input onChange={(e)=>{
                        this.setState({message:e.target.value})
                        console.log(this.state.message)
                        }}></input>
                    <button onClick={()=>{this.props.add(this.state.message)}}>submit</button>
                </div>
            </div>
        )
    }
}

export default ChatRoom;