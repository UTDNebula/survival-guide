import mongoose, {Model} from 'mongoose';
import {NextApiRequest, NextApiResponse} from "next";

export const CONTENT_COLLECTION = "Content"

interface ContentDocument extends mongoose.Document {
    text: mongoose.Schema.Types.String
    type: mongoose.Schema.Types.String
}

interface ContentInput {
    text: ContentDocument["text"]
    type: ContentDocument["type"]
}

export const ContentSchema = new mongoose.Schema(
    {
        text: {
            type: mongoose.Schema.Types.String,
            default: ""
        },
        type: {
            type: mongoose.Schema.Types.String,
            required: true
        }
    },
    {
        collection: CONTENT_COLLECTION,
        timestamps: true
    }
);

export const Content: Model<ContentDocument> = mongoose.models.Content || mongoose.model<ContentDocument>(CONTENT_COLLECTION, ContentSchema);

export async function createContent(request: NextApiRequest, response: NextApiResponse):Promise<any> {
    const {text, type} = request.body
    if (!type) {
        return response.status(422).json({
            message: "type is empty"
        })
    }

    const contentInput: ContentInput = {
        text,
        type
    }
    const newContent = await Content.create(contentInput)

    return response.status(200).json({
        content: newContent
    })
}
