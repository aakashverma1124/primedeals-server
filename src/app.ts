import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/health', (req: Request, res: Response) => {
  res.json({ status: 200, message: 'Health Ok' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
