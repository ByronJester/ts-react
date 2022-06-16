import { Request, Response } from 'express'
import { TodosModel } from '../models/TodosModel'

export class Todos {
    async getTodos(req: Request, res: Response): Promise<Response> {
        const todos = await TodosModel.query();

        return res.json(todos);
    }

    async createTodo(req: Request, res: Response): Promise<Response> {
        const {
            todo
        } = req.body;

        const todoReq = {
            todo
        }

        await TodosModel.query().insert(todoReq);

        const todos = await TodosModel.query();

        return res.json(todos);
    }

    async doneTodo(req: Request, res: Response): Promise<Response> {
        const id = req.body.id;

        const is_done = req.body.is_done;

        await TodosModel.query()
            .findById(id)
            .patch({
                is_done: is_done
            })

        const todos = await TodosModel.query();

        return res.json(todos);
    }

    async deleteTodo(req: Request, res: Response): Promise<Response> {
        const id = req.body.id;

        await TodosModel.query().deleteById(id);

        const todos = await TodosModel.query();

        return res.json(todos);
    }
}         