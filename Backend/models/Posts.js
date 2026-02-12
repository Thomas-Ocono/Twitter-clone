import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postContent: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Post = mongoose.model("Post", postSchema);

export default Post;
