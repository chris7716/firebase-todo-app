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

var firebaseConfig = {
    apiKey: "AIzaSyBFo2_C8J24zjmn4Fu7ptpeSsVrx8TjSzM",
    authDomain: "fir-app-4ae27.firebaseapp.com",
    projectId: "fir-app-4ae27",
    storageBucket: "fir-app-4ae27.appspot.com",
    messagingSenderId: "851436443137",
    appId: "1:851436443137:web:b912677354c27853275200",
    measurementId: "G-DCSR83L10Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const api = functions.https.onRequest(app);
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
