import * as firebase from 'firebase'
import {firebaseConfig} from  '../../../configs/FbConfig.js'

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {
    database,
}