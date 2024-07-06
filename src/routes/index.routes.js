import express from 'express';
import bookRoutes from './book.routes.js';

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('Curso de Node.JS'));

  app.use(express.json(), bookRoutes);
};

export default routes;
