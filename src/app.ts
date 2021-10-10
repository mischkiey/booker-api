// Methods
import express from 'express';

// Routes
import authRoute from './routes/auth';
import booksRoute from './routes/books';

// Utils
import errorHandler from './utils/errorHandler';

const app = express();

app.use('/auth', authRoute);
app.use('/books', booksRoute);

app.use(errorHandler);

export default app;