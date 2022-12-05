import mongoose, {  Model } from 'mongoose';
import {ContentSchema} from './content.model'
import {NextApiRequest, NextApiResponse} from "next";

export const CONTAINER_COLLECTION = "Container"

// TODO: Figure out how to store parentContainer and childContainers as Container, not as ObjectId
interface ContainerDocument extends mongoose.Document {
    order: mongoose.Schema.Types.Number
    parentContainer: mongoose.Schema.Types.ObjectId
    childContainers: [mongoose.Schema.Types.ObjectId]
    contents: [typeof ContentSchema]
}

interface ContainerInput {
    order: ContainerDocument["order"]
    parentContainer: ContainerDocument["parentContainer"]
    childContainers: ContainerDocument["childContainers"]
    contents: ContainerDocument["contents"]
}

export const ContainerSchema = new mongoose.Schema(
    {
        order: {
            type: mongoose.Schema.Types.Number,
            required: true,
        },
        parentContainer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: CONTAINER_COLLECTION,
            default: null
        },
        childContainers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: CONTAINER_COLLECTION,
            default: null
        }],
        contents: [{
            type: ContentSchema,
            default: null
        }]
    },
    {
        collection: CONTAINER_COLLECTION,
        timestamps: true
    }
)

export const Container: Model<ContainerDocument> = mongoose.models.Container || mongoose.model<ContainerDocument>(CONTAINER_COLLECTION, ContainerSchema)

export async function createContainer(request: NextApiRequest, response: NextApiResponse):Promise<any> {
    const {order, parentContainer, childContainers, contents} = request.body

    const containerInput: ContainerInput = {
        order,
        parentContainer,
        childContainers,
        contents
    }
    const newContainer = await Container.create(containerInput)

    return response.status(200).json({
        container: newContainer
    })
}
