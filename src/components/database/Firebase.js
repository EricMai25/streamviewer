import * as firebase from 'firebase'
// import {firebaseConfig} from  '../../../configs/FbConfig.js'
import {fbApi} from '../../../server/server.js'

// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(fbApi);
const database = firebase.database();

export {
    database,
}