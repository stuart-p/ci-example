import express from 'express';
import routes from './paths';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use(routes);

app.use(errorHandler);

export default app;
