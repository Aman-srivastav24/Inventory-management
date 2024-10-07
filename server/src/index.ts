import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import dashboardRoutes from './routes/dashboardRoutes'

// route imports

// configuarations

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//routes
app.use("/dashboard",dashboardRoutes)
//server

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
