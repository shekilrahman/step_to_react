import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('book', bookSchema);
