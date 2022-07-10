// import http from 'http';
import express, { Request, Response } from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import errorMiddleware from './middleware/error.middleware';
import routes from './route';
import Env, { mongoDBConfig, postgresDBConfig } from '../config';

const { NODE_LOCAL_PORT } = Env;
const app = express();
app.use(cors());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Too many requests from this IP, Please try again after 15 minute',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoDBConfig();
postgresDBConfig();

app.use('/api', routes);

app.use(errorMiddleware);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
  res.status(404).send({
    error: 'page not found',
  });
});

// const httpServer = http.createServer(app);
// httpServer.listen(NODE_LOCAL_PORT, () => {
//   console.log(`Server is starting at prot:${NODE_LOCAL_PORT}`);
// });

app.listen(NODE_LOCAL_PORT, () => {
  console.log(`Server is starting at prot:${NODE_LOCAL_PORT}`);
});

export default app;
