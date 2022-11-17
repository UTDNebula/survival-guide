import mongoose, {  Model } from 'mongoose';
import { Container } from './container.model'


export interface PostDocument extends mongoose.Document {
  title: string;
  content: string | null;
  contributers: string;
  tags?: string;
  page: number;
  
};

export interface PostInput {
  title: PostDocument['title'];
  contributers: PostDocument['contributers'];
  tags: PostDocument['tags'];
  page: PostDocument['page'];
};

const postSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.String,
      required: true,
      unique: true,
    },
    page: {
      type: mongoose.Schema.Types.Number,
      unique: true,
    
    },
    contributers: [{
      type: mongoose.Schema.Types.String,
      required: true,
      default: null,
    }],
    tags: [{
      type: mongoose.Schema.Types.String,
      default: null
    }],
    headings: [{
      type: mongoose.Schema.Types.String,
      default: null
    }],
    postContainers: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Container',
      default: null
    }] 
    

  },
  {
    collection: 'Articles',
    timestamps: true,
  },
);

const Post: Model<PostDocument> = mongoose.models.Post || mongoose.model<PostDocument>('Post', postSchema);

export { Post }
