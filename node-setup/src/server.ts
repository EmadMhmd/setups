import http from 'http';
import express, { Request, Response, Application } from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import errorMiddleware from './middleware/error.middleware';
import routes from './route';
import Env, { connectToDB } from '../config';

const { NODE_LOCAL_PORT } = Env;

const app: Application = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// const swaggerDefinition = {
//   openapi: '3.0.0',
//   info: {
//     title: 'Express API for JSONPlaceholder',
//     version: '1.0.0',
//     description:
//      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
//     license: {
//       name: 'Licensed Under MIT',
//       url: 'https://spdx.org/licenses/MIT.html',
//     },
//     contact: {
//       name: 'JSONPlaceholder',
//       url: 'https://jsonplaceholder.typicode.com',
//     },
//   },
//   servers: [
//     {
//       url: 'http://localhost:5000',
//       description: 'Development server',
//     },
//   ],
// };

// const options = {
//   swaggerDefinition,
//   // Paths to files containing OpenAPI definitions
//   apis: ['./route/*.ts'],
// };

// const swaggerSpec = swaggerJSDoc(options);

app.use(cors());
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

connectToDB();

app.use('/api', routes);

app.use(errorMiddleware);

// app.use(
//   '/docs',
//   swaggerUi.serve,
//   swaggerUi.setup(swaggerSpec),
// );

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: 'swagger.json',
    },
  }),
);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
  res.status(404).send({
    error: 'page not found',
  });
});

const httpServer = http.createServer(app);
httpServer.listen(NODE_LOCAL_PORT, () => {
  console.log(`Server is starting at prot:${NODE_LOCAL_PORT}`);
});

// app.listen(NODE_LOCAL_PORT, () => {
//   console.log(`Server is starting at prot:${NODE_LOCAL_PORT}`);
// });

export default app;
