import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    res.send('Sign in');
})

//Exporting and rename it
export {router as signInRouter}
