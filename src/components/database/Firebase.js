import * as firebase from 'firebase'
// import {firebaseConfig} from  '../../../configs/FbConfig.js'
// import {fbApi} from '../../../server.js'
import {firebaseConfig} from '../../source.js'
console.log(firebaseConfig.databaseURL)
firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(fbApi);
// firebase.initializeApp(process.env.firebaseConfig);

const database = firebase.database();

export {
    database,
}