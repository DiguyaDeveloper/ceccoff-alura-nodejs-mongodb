import express from "express";

const app = express();

app.get("/", (req, res) => {

    res.status(200).send("Curso de Node.js");
});

app.get("/books", (req, res) => {
    const books = [
        {
            id: 1,
            titulo: "O Senhor dos Anéis"
        },
        {
            id: 2,
            titulo: "O Hobbit"
        }
    ]
    res.status(200).json(books);
})

export default app;