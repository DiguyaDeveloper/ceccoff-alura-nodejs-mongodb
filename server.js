import http from "http";

const PORT = 3000;

const ROUTES = {
    "/": "Curso de Express API",
    "/book": "Entrei na rota livros",
    "/author": "Entrei na rota autores"
}

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end(ROUTES[req.url]);
});

server.listen(PORT, () => {

    console.log(`Server started in port: ${PORT}`)
});