import mongoose, {  Model } from 'mongoose';

export interface PostDocument extends mongoose.Document {
  title: string;
  content: string | null;
};

export interface PostInput {
  title: PostDocument['title'];
  content: PostDocument['content'];
};

const postSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    content: {
      type: mongoose.Schema.Types.String,
      default: null,
    },
  },
  {
    collection: 'Articles',
    timestamps: true,
  },
);

const Post: Model<PostDocument> = mongoose.models.Post || mongoose.model<PostDocument>('Post', postSchema);

export { Post }
