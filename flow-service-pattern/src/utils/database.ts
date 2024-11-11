import mongoose from 'mongoose';
import { DATABASE_URL } from './env';

const connectDB = async () => 
{
    try {
        await mongoose.connect(DATABASE_URL, {
            dbName: "Ini-Baru-Upload",
        });
        return "Database Connected";
    } catch (error) {
        return error;
    }
};

export default connectDB