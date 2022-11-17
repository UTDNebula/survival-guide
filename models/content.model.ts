import mongoose, {  Model } from 'mongoose';

export interface contentDocument extends mongoose.Document {
  title: string;
  
};

export interface ContentInput {
  title: contentDocument['title'];
};

const contentSchema = new mongoose.Schema(
  {
    type: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    styles: [{
      type: mongoose.Schema.Types.String,
      default: null,
    }],
    input: {
      type: mongoose.Schema.Types.String,
      required: true,
    }
  },
);

const Content: Model<contentDocument> = mongoose.models.Content || mongoose.model<contentDocument>('Content', contentSchema);

export { Content }
