import { Request, Response } from 'express'
import { connect } from '../configuration/database'

export async function getTodos(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    const todos = await conn.query("SELECT * FROM todos");

    return res.json(todos[0]);
}