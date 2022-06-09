import { Request, Response, Router } from 'express'
import { Todos } from '../controllers/todos.controller'

const router = Router();

const todos = new Todos();

router.get('/todos', (req: Request, res: Response) => {
    todos.getTodos(req, res);
})

router.post('/createTodo', (req: Request, res: Response) => {
    todos.createTodo(req, res);
})

router.post('/doneTodo', (req: Request, res: Response) => {
    todos.doneTodo(req, res);
})

router.post('/deleteTodo', (req: Request, res: Response) => {
    todos.deleteTodo(req, res);
})

export default router;


