const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios')
const KEY = require('../configs/config.json')

const app = express();
const port = 3123;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/video' ,(req,res)=>{
    axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet', {
        params : {
            eventType: 'live',
            type:'video',
            regionCode: 'US',
            order: 'viewCount',
            videoCategoryId:20,
            maxResults: 1,
            key: KEY.api
        }
    })
    .then((response)=>{
        res.send(response.data)
    })
    .catch(error => {
        console.log( 'Error : '+error)
    })
})

app.listen(port, () => {
    console.log('Listening to ' + port)
});