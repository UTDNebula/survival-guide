import {NextApiRequest, NextApiResponse} from "next";
import {createContent} from "../../models/content.model";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    try {
        if (request.method !== "POST") {
            return
        }
        return createContent(request, response)
    } catch (error) {
        console.log(error)
        response.json(error)
    }
}