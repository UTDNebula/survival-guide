import type { NextApiRequest, NextApiResponse } from 'next'
import { Post, PostInput } from '../models/post.model'

//returns all the posts, http://localhost:3000/api/posts
async function getPosts(req: NextApiRequest,res: NextApiResponse):Promise<any>{
  try {
    const allPosts = await Post.find({})
    return res.status(200).json({ data: allPosts})

  } catch (error:any){
    res.status(404).json({Error: error})
  }
}

//creates a post, http://localhost:3000/api/posts/
async function createPost(req: NextApiRequest,res: NextApiResponse):Promise<any>{
  const { title, contributers, tags } = req.body
    if (!title || !contributers) {
      return res.status(422).json({
        message: 'include title and content'
      })
    }
    const docCount = await Post.countDocuments()
   
    const _postInput: PostInput = {
      title,
      contributers,
      tags,
      page: docCount+1
    }
    const newPost = await Post.create(_postInput)
    return res.status(200).json({ data: newPost })
}  

//returns only one post, http://localhost:3000/api/posts/:page_number
async function getPost(req: NextApiRequest,res: NextApiResponse):Promise<any>{
  const { page_number } = req.query
  const post = await Post.findOne({ page: page_number })
    
    if(!post){
      return res.status(400).json({
        message: `Page ${ page_number } not found`
      })
    }
    console.log(page_number)
    return res.status(200).json({ data: post })
}

//udpates a posts, http://localhost:3000/api/posts/:page_number
async function updatePost(req: NextApiRequest,res: NextApiResponse):Promise<any>{
  const { postID } = req.query
  const { title, content } = req.body
  
  const post = await Post.findOne({ _id: postID })
  if (!post) {
    return res.status(400).json({
      message: `Post with id "${postID}" not found`
    })
  }
  if (!title || !content){
    return res.status(400).json({
      message: 'Title and content fields required'
    })
  }
  await Post.updateOne({ _id:postID}, {title, content})
  const postUpdated = await Post.findById(postID, { title, content })

  return res.status(200).json({ data:postUpdated })
}

//deletes a posts, http://localhost:3000/api/posts/:page_number
async function deletePost(req: NextApiRequest,res: NextApiResponse):Promise<any>{
  const { postID } = req.query

  await Post.findByIdAndDelete(postID)

  return res.status(200).json({
    message: 'Post deleted successfully'
  })

}

export {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost
}
