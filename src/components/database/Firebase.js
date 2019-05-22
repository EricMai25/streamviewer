import * as firebase from 'firebase'
// import {firebaseConfig} from  '../../../configs/FbConfig.js'
import {firebase} from '../../../server/server.js'

// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebase);
const database = firebase.database();

export {
    database,
}