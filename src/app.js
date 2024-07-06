import express from "express";

const books = [
  {
    id: 1,
    title: "O Senhor dos Anéis",
  },
  {
    id: 2,
    title: "O Hobbit",
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

  if (index) {
    res.status(200).json(books[index]);
  }

  res.status(404).send("Livro não encontrado");
});

app.put("/books/:id", (req, res) => {
    const index = getBooks(req.params.id);

    if (index) {
        books[index].title = req.body.title;
        res.status(200).json(books[index]);
    }
    
    res.status(404).send("Livro não encontrado");
});

export default app;
