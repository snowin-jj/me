import { Handler } from 'express';
import me from '../data/me.json';

export const getMe: Handler = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(200).json(me);
};
