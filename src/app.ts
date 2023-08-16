import express, { Request, Response } from 'express';
import morgan from 'morgan';
import router from './router';

const app = express();

// Public assets
app.use(express.static(__dirname + '/public'));

// Middlewares
app.use(morgan('dev'));

// Routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).json(`Want to know about snowin! Go to: '/me'`);
});
app.use('/me', router);

export default app;
