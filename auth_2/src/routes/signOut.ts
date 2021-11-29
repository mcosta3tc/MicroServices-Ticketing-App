import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('sign Out');
})

//Exporting and rename it
export {router as signOutRouter}
