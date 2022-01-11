import express, { Request, Response } from 'express';
import { Application } from 'express';

import Server from './src';
const app: Application = express();
new Server(app);

app.get('/', (req: Request, res: Response) => {
  console.log('base root');
  res.send('Hello');
  res.end();
});

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app
  .listen(3000, 'localhost', function () {
    console.info(`Server running on) // : http://localhost:${port}`);
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.log('server startup error: address already in use');
    } else {
      console.log(err);
    }
  });
