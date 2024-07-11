import express from 'express';
import AuthorController from '../controllers/Author.controller.js';

const routes = express.Router();

routes.get('/authors', AuthorController.getAuthors);
routes.get('/authors/:id', AuthorController.getAuthorsById);
routes.post('/authors', AuthorController.create);
routes.put('/authors/:id', AuthorController.update);
routes.delete('/authors/:id', AuthorController.delete);

export default routes;
