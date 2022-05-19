import { Request, Response } from 'express'
import { connect } from '../configuration/database'

export async function doneTodo(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    await conn.query(`UPDATE todos SET is_done = ${req.body.is_done} WHERE id = "${req.body.id}"`);

    const todos = await conn.query("SELECT * FROM todos");

    return res.json(todos[0]);
}