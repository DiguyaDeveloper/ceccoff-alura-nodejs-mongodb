import express from 'express';
import { BookController } from '../controllers/Book.controller.js';

const routes = express.Router();

routes.get('/books', BookController.getBooks);
routes.get('/books/:id', BookController.getBookById);
routes.post('/books', BookController.createBook);
routes.put('/books/:id', BookController.updateBookById);
routes.delete('/books/:id', BookController.deleteBookById);

export default routes;
