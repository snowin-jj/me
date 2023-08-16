import { Handler, Request, Response } from 'express';
import me from '../data/me';

export const getMe: Handler = async (req: Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.status(200).json(me);
};
