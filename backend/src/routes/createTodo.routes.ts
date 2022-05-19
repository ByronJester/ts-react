import { Router } from 'express'
import { createTodo } from '../controllers/createTodo.controller'

const router = Router();

router.route('/')
    .post(createTodo)

export default router;

