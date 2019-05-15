import React from 'react';
import Api from '../../Configs/credentials.json';
import GoogleLogin from 'react-google-login';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
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