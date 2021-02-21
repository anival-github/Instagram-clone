import * as express from 'express';
import * as logger from 'morgan';
import * as cors from 'cors';
import usersRouter from './routes/users';
// import todosRouter from './routes/todos';
//import postsRouter from './routes/posts'

const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/todos', todosRouter);
// app.use('/posts', postsRouter);
app.use('/users', usersRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({
    statusCode: 404
  })
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
    statusCode: 500,
    message: err.message,
    stack: err.stack
  })
});

export default app