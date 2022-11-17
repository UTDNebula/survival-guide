import mongoose, {  Model } from 'mongoose';
import { Content } from './content.model'

export interface ContainerDocument extends mongoose.Document {
  containerID: string;
  
};

export interface ContainerInput {
  containerID: ContainerDocument['containerID'];
};

const containerSchema = new mongoose.Schema(
  {
    containerID: {
      type: mongoose.Schema.Types.Number,
      required: true,
      unique: true,
    },
    order: {
      type: mongoose.Schema.Types.Number,
      required: true,
      unique: true,
    },
    containerContent: [{
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Content',
      default: null
    }]    
  },
);

const Container: Model<ContainerDocument> = mongoose.models.Container || mongoose.model<ContainerDocument>('Container', containerSchema);

export { Container }
