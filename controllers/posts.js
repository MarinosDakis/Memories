import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {

    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error });
    }

};

export const createPost =  async(req, res) => {
    const post = req.body;

    //create new post with values of req.body
    const newPost = new PostMessage(post);
    
    try {

        await newPost.save();
        res.status(201).json(newPost);

    } catch (error) {

        res.status(404).json({ message: error });
    
    }
}

export const updatePost = async(req, res) => {

    try {

        const { id: _id } = req.params;
        const post = req.body;

        // check if mongoose id
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

        const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

        res.json(updatedPost);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async(req, res) => {

    try {

        const { id } = req.params;

        // check if mongoose id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

        await PostMessage.findByIdAndRemove(id);

        console.log("DELETE");

        res.json({ message: "Post deleted successfully" });
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const likePost = async(req, res) => {

    try {

        const { id } = req.params;

        // check if mongoose id
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const post = await PostMessage.findById(id);

        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
        
        res.json(updatedPost);

    } catch (error) {
        res.status(404).json({ message: error });
    }
}
