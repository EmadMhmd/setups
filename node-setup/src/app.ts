import express, { Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import { userRoute } from './route';
import { mongoDBConfig, postgresDBConfig } from '../config';

const app = express();
app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoDBConfig();
postgresDBConfig();

app.use('/', userRoute);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
  res.status(404).send({
    error: 'page not found',
  });
});

export default app;
