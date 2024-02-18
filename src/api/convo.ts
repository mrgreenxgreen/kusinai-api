import express from 'express';
import Convo from '../model/Convo';

const router = express.Router();

type EmojiResponse = string[];

router.post('/', (req, res) => {
    const data = req.body;
    const newConvo = new Convo({
        user:req.body.user,
        userMessage: req.body.userMessage,
        botMessage: req.body.botMessage
    })

    newConvo.save()
    res.send("successfully added")
    // res.send("hello")
});

router.get('/intent/:username',async (req,res,next)=>{
   try{
    const { username } = req.params;
    const intents = await Convo.find({ 
        user: username,
        "botMessage.intent": { $exists: true }
    }).sort({ createdAt: -1 })
      .limit(10  );
      res.status(200).json(intents)
   } catch(error){
    next(error)
   }

})

router.get('/intent/all/:username',async (req,res,next)=>{
    try{
     const { username } = req.params;
     const intents = await Convo.find({ 
         user: username,
         "botMessage.intent": { $exists: true }
     }).sort({ createdAt: -1 })
       .limit(100);
       res.status(200).json(intents)
    } catch(error){
     next(error)
    }
 
 })

export default router;

