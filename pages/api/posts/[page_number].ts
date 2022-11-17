import type { NextApiRequest, NextApiResponse } from 'next'
import { Post, PostInput } from '../../../models/post.model'
import mongoConnect from '../../../utils/connect'
import { getPosts, createPost, getPost, updatePost, deletePost } from '../../../utils/controller'

export default async function handler(req: NextApiRequest,res: NextApiResponse):Promise<any> {
  try{
    const db = await mongoConnect()
    console.log('Connected to DB')
  } catch (error) {
    console.log(error)
  }
  const {method} = req
  
  switch (method){
    case'GET':
      getPost(req, res)
      break
    case'DELETE':
      deletePost(req, res)
      break
    case'PUT':
      updatePost(req, res)
      break
  }
  
}  