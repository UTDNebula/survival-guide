import {NextApiRequest, NextApiResponse} from "next";
import {createArticle} from "../../models/article.model";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    try {
        if (request.method !== "POST") {
            return
        }
        return createArticle(request, response)

    } catch (error) {
        console.log(error)
        response.json(error)
    }
}