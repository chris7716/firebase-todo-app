import { Request, Response } from "express";
import * as admin from 'firebase-admin';
import firebase from 'firebase';

export async function redister(req: Request, res: Response) {
   try {
       const { displayName, password, email, } = req.body

       if (!displayName || !password || !email) {
           return res.status(400).send({ message: 'Missing fields' })
       }

       const creds = await admin.auth().createUser({
           displayName,
           photoURL: 'https://www.hasitha.com',
           password,
           email
       })
       //await admin.auth().setCustomUserClaims(uid, { role })

       return res.status(201).send({ creds })
   } catch (err) {
       return handleError(res, err)
   }
}

export async function login(req: Request, res: Response) {
    console.log("LOGIN");
    const { username, password } = req.body
    try {
        const creds = await firebase.auth().signInWithEmailAndPassword(username, password);
        if (creds.user) {
            const token = await creds.user.getIdToken();
            return res.status(201).send({token})
        }
        return res.status(400).send();
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
    }
}

function handleError(res: Response, err: any) {
   return res.status(500).send({ message: `${err.code} - ${err.message}` });
}