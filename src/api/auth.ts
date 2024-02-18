import express from 'express';
import User from '../model/User';
import { updateUserById } from './updateservice';


const router = express.Router();


router.post('/login',async (req, res,next) => {
    try{
        const user = await User.findOne({username:req.body.username})
        if(!user){
            const error = "user not found"
            return res.status(404).json(error)
        }
        if(req.body.password != user.password){
            const error = "wrong password"
            return res.status(400).json(error)
        }else if(req.body.password == user.password){
            const message = user
            res.status(200).json(message)
        }
    }catch(err){
        next(err)
    }
   
});

router.post('/logout',async (req,res,next)=>{

})

router.post('/register',async (req,res,next)=>{
    try{
        // var salt = bcrypt.genSaltSync(10);
        // var hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            name:req.body.name,
            // password:hash,
            password:req.body.password,
            role: req.body.role,
        })
        await newUser.save();
        res.status(200).send('User has been created');
    }catch(err){
        next(err);
    }
})
//TO FIX
// router.post('/updateAccount/:id',async (req,res,next)=>{
//     try {
//         const { id } = req.params;
//         const updatedUser = await updateUserById(id, req.body);
//         res.status(200).json(updatedUser);
//       } catch (error) {
//         next(error);
//       }
// })

export default router;

