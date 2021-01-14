import mongoose  from 'mongoose';

const CommentSchema = mongoose.Schema({
    postID:String,
    comment:String
   
})
export default mongoose.model('comments',CommentSchema);