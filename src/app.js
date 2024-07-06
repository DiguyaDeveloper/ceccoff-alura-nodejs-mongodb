import express from "express";

const books = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
  },
  {
    id: 2,
    titulo: "O Hobbit",
  },
];

function getBooks(id) {
  return books.findIndex((book) => {
    return book.id === Number(id);
  });
}

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.get("/books/:id", (req, res) => {
  const index = getBooks(req.params.id);

  if (book) {
    res.status(200).json(books[index]);
  }

  res.status(404).send("Livro não encontrado");
});


export default app;
