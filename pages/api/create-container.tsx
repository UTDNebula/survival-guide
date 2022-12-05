import {NextApiRequest, NextApiResponse} from "next";
import {createContainer} from "../../models/container.model";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    try {
        if (request.method !== "POST") {
            return
        }
        return createContainer(request, response)
    } catch (error) {
        console.log(error)
        response.json(error)
    }
}