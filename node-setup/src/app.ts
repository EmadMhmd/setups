import express, { Request, Response } from 'express';
import path from 'path';
// import { Sequelize } from 'sequelize';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import indexRouter from './routes/user.route';
import mongoDBConfig from '../config/mongoDB.config';

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

// const dbConnect = new Sequelize(
//   'indexima',
//   'root',
//   'corelia',
//   {
//     host: '10.198.0.3',
//     dialect: 'mariadb',
//   },
// );

// dbConnect.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.error('Unable to connect to the database:', error);
// });

// app.use('/', async () => {
//   try {
//     await dbConnect.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// });

// const COCA_DB_URL = dbConfig.url;
// console.log(COCA_DB_URL);

// mongoose.connect(COCA_DB_URL, {
//   useNewUrlParser: true,
// });
// mongoose.connection.on('connected', () => {
//   console.log('Connected Successfully To Database ');
// });
// mongoose.connection.on('error', (err) => {
//   console.error(`Failed To Database : ${err}`);
// });
mongoDBConfig();

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
  console.error('404 Page Not Found');
  return res.send({
    error: 'page not found',
  });
});

export default app;
