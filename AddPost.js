import mongoose  from 'mongoose';

const PostSchema = mongoose.Schema({
    title:String,
    description:String
})
export default mongoose.model('posts',PostSchema);