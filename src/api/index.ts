import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import convo from './convo'
import auth from './auth'

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/convo',convo)
router.use('/auth',auth)

export default router;


// app.get('/',(req, res)=>{
//   res.send("Hello this the api for chatbot")
// })

// app.post('/convo',(req, res)=>{
//   const data = req.body;
//   const newConvo = new Convo({
//     userMessage:req.body.userMessage,
//     botMessage:req.body.botMessage
//   })
//   res.send(JSON.stringify(data))
// })

