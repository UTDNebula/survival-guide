// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post, PostInput } from '../../models/post.model'
import mongoConnect from '../../util/connect'

export default async function handler(req: NextApiRequest,res: NextApiResponse):Promise<any> {
  
  try{
    const db = await mongoConnect()
    console.log('Connected to DB')
    if (!db){}
  } catch (error) {
    console.log(error)
  }
  if (req.method == 'POST'){
    const { title, content } = req.body
    if (!title || !content) {
      return res.status(422).json({
        message: 'include title and content'
      })
    }
    const _postInput: PostInput = {
      title,
      content
    }
    const newPost = await Post.create(_postInput)
    return res.status(200).json({ data: newPost })
  }
  if (req.method == 'GET'){
    const allPosts = await Post.find()

    return res.status(200).json({ data: allPosts })
  }

}
