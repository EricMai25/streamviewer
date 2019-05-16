import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        axios.get('GET https://www.googleapis.com/youtube/v3/liveBroadcasts')
        .then((response)=>{
            console.log(response)
        })
        .catch(error => {
            console.log( 'Error : '+error)
        })
    }

    render(){
        return(
            <div>
                Hello World
            </div>
        )   
    }
}

export default App