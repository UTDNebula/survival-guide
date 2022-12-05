import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URL as string

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

export default async function dbConnect() {
    await mongoose.connect(MONGODB_URI)
}