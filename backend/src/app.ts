import express, { Application } from 'express';
import morgan from 'morgan'
import cors from 'cors';
import bodyParser from 'body-parser'

/*
Imported Routes
*/
import IndexRoutes from './routes/index.routes'
import TodosRoutes from './routes/todos.routes'

export class App {
    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.cors();
        this.parser();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.port || 4000)
    }

    cors() {
        this.app.use(cors())
    }

    middlewares() {
        this.app.use(morgan('dev'))
    }

    routes() {
        this.app.use(IndexRoutes);
        this.app.use('/', TodosRoutes)
    }

    parser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server start on port', this.app.get('port'))
    }
}