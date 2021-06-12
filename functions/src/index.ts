import firebase from "firebase/app";
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { routesConfig } from './router';

admin.initializeApp();

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));
routesConfig(app);

console.log(functions.config().app.apikey);

var firebaseConfig = {
    apiKey: functions.config().app.apikey,
    authDomain: functions.config().app.authdomain,
    projectId: functions.config().app.projectid,
    storageBucket: functions.config().app.storagebucket,
    messagingSenderId: functions.config().app.senderid,
    appId: functions.config().app.appid,
    measurementId: functions.config().app.measurementid
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const api = functions.https.onRequest(app);
