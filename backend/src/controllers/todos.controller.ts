import { Request, Response } from 'express'
// import { connect } from '../configuration/database'
import connection from '../configuration/db'

export class Todos {
    // async getTodos(req: Request, res: Response): Promise<Response> {
    //     const conn = await connect();

    //     const todos = await conn.query("SELECT * FROM todos");

    //     return res.json(todos[0]);
    // }

    // async createTodo(req: Request, res: Response): Promise<Response> {
    //     const conn = await connect();

    //     const create = await conn.query(`INSERT INTO todos (todo) VALUES ("${req.body.todo}")`);

    //     return res.json(create);
    // }

    // async doneTodo(req: Request, res: Response): Promise<Response> {
    //     const conn = await connect();

    //     await conn.query(`UPDATE todos SET is_done = ${req.body.is_done} WHERE id = "${req.body.id}"`);

    //     const todos = await conn.query("SELECT * FROM todos");

    //     return res.json(todos[0]);
    // }

    // async deleteTodo(req: Request, res: Response): Promise<Response> {
    //     const conn = await connect();

    //     await conn.query(`DELETE FROM todos WHERE id = ${req.body.id}`);

    //     const todos = await conn.query("SELECT * FROM todos");

    //     return res.json(todos[0]);
    // }

    async getTodos(req: Request, res: Response): Promise<Response> {
        const todos = await connection('todos').select('*');

        return res.json(todos);
    }

    async createTodo(req: Request, res: Response): Promise<Response> {
        const {
            todo
        } = req.body;

        const todoReq = {
            todo
        }

        await connection('todos').insert(todoReq);

        const todos = await connection('todos').select('*');

        return res.json(todos);
    }

    async doneTodo(req: Request, res: Response): Promise<Response> {
        const id = req.body.id;

        const is_done = req.body.is_done;

        await connection('todos').where('id', id).update({ 'is_done': is_done });

        const todos = await connection('todos').select('*');

        return res.json(todos);
    }

    async deleteTodo(req: Request, res: Response): Promise<Response> {
        const id = req.body.id;

        await connection('todos').where('id', id).delete();

        const todos = await connection('todos').select('*');

        return res.json(todos);
    }
}