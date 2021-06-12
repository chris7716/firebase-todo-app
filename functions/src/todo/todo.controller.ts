import { Request, Response } from "express";
import * as admin from 'firebase-admin';

export async function createTodo(req: Request, res: Response) {
    const todo = req.body;

    await admin.firestore().collection('todo').add(todo);

    return res.status(201).send();
}

export async function listTodos(req: Request, res: Response) {

    admin.firestore().collection("todo").get().then((querySnapshot) => {
        const todos = querySnapshot.docs.map(doc => doc.data());
        return res.status(201).send({ todos });
    });
    
}
