import express from 'express';
import routes from './routes/Routes';
import { prisma } from './lib/prisma';

const app = express();

app.use(express.json())
app.use(routes)

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
})

export default app