import { Application } from "express";
import { isAuthenticated } from "./service/auth.service";
import { createTodo, listTodos } from "./todo/todo.controller";
import { redister, login } from "./user/user.controller";

export function routesConfig(app: Application) {
    app.post(
        '/register',
        redister
    );
    app.post(
        '/login',
        login
    );
    app.post(
        '/todo/create',
        isAuthenticated,
        createTodo
    );
    app.post(
        '/todo/list',
        isAuthenticated,
        listTodos
    );
}