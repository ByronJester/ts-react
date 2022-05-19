import { Request, Response } from 'express'
import { connect } from '../configuration/database'

export async function createTodo(req: Request, res: Response): Promise<Response> {
    const conn = await connect();

    const create = await conn.query(`INSERT INTO todos (todo) VALUES ("${req.body.todo}")`);

    return res.json(create);
}