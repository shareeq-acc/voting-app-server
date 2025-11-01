import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db_connect from './db/database.js';

const app = express();
db_connect();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ 
    limit: "50kb"
}))
app.use(express.urlencoded({ // encodeed data that comes from url
    limit: '50kb',
    extended: true
}))
app.use(cookieParser())

import userRoute from './routes/user.route.js';
import candidateRoute from './routes/candidate.route.js';
import votingStatusRoute from './routes/votingStatus.route.js';

app.use("/api/v1/users", userRoute)
app.use("/api/v1/candidates", candidateRoute)
app.use("/api/v1/voting-status", votingStatusRoute)


export default app