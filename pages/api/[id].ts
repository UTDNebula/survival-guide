import type { NextApiRequest, NextApiResponse } from 'next'
import { Post, PostInput } from '../../models/post.model'
import mongoConnect from '../../util/connect'
import { Request, Response } from 'express'

export default async function handler(req: Request,res: Response):Promise<any> {
  try{
    await mongoConnect()
    console.log('Connected to DB')
  } catch (error) {
    console.log(error)
  }
  if (req.method == 'GET'){
    const { id } = req.params
    const post = await Post.findOne({ _id: id})
    
    if(!post){
      return res.status(400).json({
        message: `Post with id '${id} not found`
      })
    }
    return res.status(200).json({ data: post})
  }
  if (req.method == 'PUT'){
    const { id } = req.params
    const { title, content } = req.body

    const post = await Post.findOne({ _id: id })
    if (!post) {
      return res.status(400).json({
        message: `Post with id "${id}" not found`
      })
    }
    if (!title || !content){
      return res.status(400).json({
        message: 'Title and content fields required'
      })
    }

    await Post.updateOne({ _id:id}, {title, content})
    const postUpdated = await Post.findById(id, { title, content })

    return res.status(200).json({ data:postUpdated })
  }
  if (req.method == 'DELETE'){
    const { id } = req.params
    
    await Post.findByIdAndDelete(id)

    const post = await Post.findOne({ _id: id })
    if (!post) {
      return res.status(400).json({
        message: `Post with id "${id}" not found`
      })
    }

    return res.status(200).json({
      message: 'Post deleted successfully'
    })
  }

}  