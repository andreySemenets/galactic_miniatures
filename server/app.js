require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dbCheck = require('./helpers/dbCheck');
const authRouter = require('./routers/authRouter');
const itemsRouter = require('./routers/itemsRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const { PORT } = process.env;

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: [process.env.CLIENT_URL, 'http://localhost:3000'],
}));

// routers
app.use('/auth', authRouter);
app.use('/items', itemsRouter);

app.use(errorMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
    dbCheck();
  } catch (error) {
    console.log(error);
    console.log('Something went wrong with server connection to the PORT');
  }
};

start();
