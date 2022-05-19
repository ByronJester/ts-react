import { Request, Response } from 'express'
import { connect } from '../configuration/database'

export async function deleteTodo(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    await conn.query(`DELETE FROM todos WHERE id = ${req.body.id}`);

    const todos = await conn.query("SELECT * FROM todos");

    return res.json(todos[0]);
}