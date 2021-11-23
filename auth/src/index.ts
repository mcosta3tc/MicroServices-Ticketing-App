import express from 'express'
import {json} from 'express'
import { currentUserRouter } from './routes/currentUser';

const app = express();
app.use(json());

//Current User Route
app.use(currentUserRouter)

app.listen(3000, () => {
    console.log('Listening on : 3000!');
})
