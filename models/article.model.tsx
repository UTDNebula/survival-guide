import mongoose, {  Model } from 'mongoose'
import {NextApiRequest, NextApiResponse} from "next";
import {ContainerSchema} from "./container.model";

const ARTICLE_COLLECTION = "Article"

interface ArticleDocument extends mongoose.Document {
    title: mongoose.Schema.Types.String
    contributors: [mongoose.Schema.Types.String]
    tags: [mongoose.Schema.Types.String]
    mainContainer: typeof ContainerSchema
}

interface ArticleInput {
    title: ArticleDocument["title"]
    contributors: ArticleDocument["contributors"]
    tags: ArticleDocument["tags"]
    mainContainer: ArticleDocument["mainContainer"]
}

const ArticleSchema = new mongoose.Schema(
    {
        title: {
            type: mongoose.Schema.Types.String,
            required: true,
            unique: true,
        },
        contributors: [{
            type: mongoose.Schema.Types.String,
            default: null
        }],
        tags: [{
            type: mongoose.Schema.Types.String,
            default: null
        }],
        // headings: [{
        //     type: mongoose.Schema.Types.String,
        //     default: null
        // }],
        mainContainer: {
            type: ContainerSchema,
            required: true
        }
    },
    {
        collection: ARTICLE_COLLECTION,
        timestamps: true
    },
);

export const Article: Model<ArticleDocument> = mongoose.models.Article || mongoose.model<ArticleDocument>(ARTICLE_COLLECTION, ArticleSchema);

export async function createArticle(request: NextApiRequest, response: NextApiResponse):Promise<any>{
    const { title, contributors, tags, mainContainer } = request.body
    if (!title) {
        return response.status(422).json({
            message: "title is empty"
        })
    }

    const articleInput: ArticleInput = {
        title,
        contributors,
        tags,
        mainContainer
    }
    const newArticle = await Article.create(articleInput)

    return response.status(200).json({
        article: newArticle
    })
}
