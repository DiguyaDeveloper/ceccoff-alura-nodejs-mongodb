import book from '../models/Book.js';

export class BookController {
  static async getBooks(req, res) {
    try {
      const books = await book.find({});
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao listar livros`,
      });
    }
  }

  static async getBookById(req, res) {
    const id = req.params.id;
    try {
      const books = await book.findById(id);
      if (!books) {
        res.status(404).json({
          message: 'Livro não encontrado',
        });
      }
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao listar livro por id: ${id}`,
      });
    }
  }

  static async createBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({
        message: 'Criado com sucesso',
        book: newBook,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao cadastrar livro`,
      });
    }
  }

  static async updateBookById(req, res) {
    const id = req.params.id;
    try {
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: `Livro atualizado`,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao atualizar livro por id: ${id}`,
      });
    }
  }

  static async deleteBookById(req, res) {
    const id = req.params.id;
    try {
      await book.findByIdAndDelete(id);
      res.status(200).json({
        message: `Livro excluido`,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao excluir livro por id: ${id}`,
      });
    }
  }
}
