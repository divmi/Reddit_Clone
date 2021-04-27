const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = new mongoose.Schema({
  postID: { type: Schema.Types.ObjectId, ref: "Post" },
  description: { type: String, required: true },
  upvotedBy: [
    {
      userID: { type: Schema.Types.ObjectId, ref: "UserProfile" }
    }
  ],
  downvotedBy: [
    {
      userID: { type: Schema.Types.ObjectId, ref: "UserProfile" }
    }
  ],
  subComment: [
    {
      commentID: { type: Schema.Types.ObjectId, ref: "Comment" }
    }
  ],
  isParentComment: { type: Boolean, defaultValue: true }
},
  {
    timestamps: true
  });

module.exports = mongoose.model("Comment", CommentSchema);
