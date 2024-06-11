import express from 'express';
import { Book } from '../models/bookModel.js';
const router = express.Router();



router.post('/', async (request, response) => {
    try {
        
        const { name, author, year } = request.body;
        
        // Check if any required field is missing
        if (!name || !author || !year) {
            console.log("Missing required fields");
            return response.status(400).send({ message: 'send all required fields' });
        }

        const newBook = {
            name,  // Directly use destructured values
            author,
            year
        };

        const book = await Book.create(newBook);
        console.log("Book created:", book);
        return response.status(201).send(book);
    } catch (error) {
        console.log("Error:", error);
        response.status(500).send({ message: error.message });
    }
});

router.get('/' ,async (request, response) =>{
    try {
        const books = await Book.find({});
        return response.status(200).json({
            count : books.length,
            data : books
        });
    } catch (error) {
        response.status(500).send({ message: error.message});
    }
});

router.get('/:id' ,async (request, response) =>{
    try {
        const { id } = request.params;

        const book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        response.status(500).send({ message: error.message});
    }
});

router.put('/:id' ,async (request, response) =>{
    try {
        
        const { name, author, year } = request.body;
        
        // Check if any required field is missing
        if (!name || !author || !year) {
            console.log("Missing required fields");
            return response.status(400).send({ message: 'send all required fields' });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id,request.body);

        if(!result){
            return response.status(404).json({message : 'book not found'});
        }else{
            return response.status(200).json({message : 'book updated'});
        }

    } catch (error) {
        response.status(500).send({ message: error.message});
    }
});

router.delete('/:id' ,async (request, response) =>{
    try {
        
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message : 'book not found'});
        }else{
            return response.status(200).json({message : 'book deleted'});
        }

    } catch (error) {
        response.status(500).send({ message: error.message});
    }
});

export default router;