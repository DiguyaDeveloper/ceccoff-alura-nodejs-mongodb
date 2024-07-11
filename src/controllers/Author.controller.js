import { author } from '../models/Author.js';

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const authors = await author.find({});
      res.status(200).json(authors);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async getAuthorsById(req, res) {
    try {
      const id = req.params.id;
      const authors = await author.findById(id);
      res.status(200).json(authors);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição do author` });
    }
  }

  static async create(req, res) {
    try {
      const newAuthors = await author.create(req.body);
      res.status(201).json({ message: 'criado com sucesso', book: newAuthors });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar author` });
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'author atualizado' });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização` });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: 'author excluído com sucesso' });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  }
}

export default AuthorController;
