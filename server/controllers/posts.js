 import PostMessage from "../models/postMessage.js"
export const getPosts = async(req, res) => { 
    // res.status(200).send('Check Posts')
    try {
        const postMessage = await PostMessage.find({})
        console.log(postMessage);
        
        //res.status(200).json(postMessage);
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}

export const createPost = async(req, res) => { 
    // res.status(200).send('Create Post')
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
       await newPost.save();
        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}