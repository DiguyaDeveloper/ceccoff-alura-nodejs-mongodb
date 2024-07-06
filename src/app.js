import express from 'express';
import databaseConnect from './config/dbConnect.js';
import routes from './routes/index.routes.js';

const connection = await databaseConnect();

connection.on('error', (error) => {
  console.error('Erro de conexão.', error);
});

connection.once('open', () => {
  console.log('Conexão realizada com sucesso.');
});

const app = express();
routes(app);

export default app;
