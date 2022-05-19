import { Router } from 'express'
import { deleteTodo } from '../controllers/deleteTodo.controller'

const router = Router();

router.route('/')
    .post(deleteTodo)

export default router;

