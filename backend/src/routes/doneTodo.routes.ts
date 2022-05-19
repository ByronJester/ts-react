import { Router } from 'express'
import { doneTodo } from '../controllers/doneTodo.controller'

const router = Router();

router.route('/')
    .post(doneTodo)

export default router;

