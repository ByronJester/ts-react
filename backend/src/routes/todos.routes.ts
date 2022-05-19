import { Router } from 'express'
import { getTodos } from '../controllers/todos.controller'

const router = Router();

router.route('/')
    .get(getTodos);

export default router;

