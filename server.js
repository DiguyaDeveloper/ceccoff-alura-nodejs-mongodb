import app from './src/app.js';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
