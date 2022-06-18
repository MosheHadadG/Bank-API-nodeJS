import express from 'express'

import { routesApp } from './routes/config.routes.js';
import cors from 'cors'

const PORT = process.env.PORT || 5050;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: 'https://bank-api-front.herokuapp.com'
}));

// Config Routes
routesApp(app);


app.listen(PORT, ()=> {
  console.log(`Server Alive on port ${PORT}`)
})
