import mongoose from 'mongoose'

const ConvoSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    userMessage:{
        type:String,
        // required:true,
    },
    botMessage:{
        type:Object,
        // required:true,
    }

},
{timestamps:true}
)

export default mongoose.model('Convo',ConvoSchema)