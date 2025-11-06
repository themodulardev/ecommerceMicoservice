
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express.json());
app.get('/', (req, res) => res.send('Hello from core service!'));

const PORT = process.env.PORT || 5079;
app.listen(PORT, () => console.log(`🚀 core running on port ${PORT}`));
