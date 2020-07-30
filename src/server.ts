import { app } from './app';

const port = 3333;

app.listen(port, () => {
  console.log(`Server online to port: ${port}`);
});
