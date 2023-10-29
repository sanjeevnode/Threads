import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MOGODB_URL) {
        return console.log('MONGO_URL not found in .env file');
    }
    if (isConnected) {

        return console.log('Already connected to DB');
    }

    try {
        await mongoose.connect(process.env.MOGODB_URL)
        isConnected = true;
    } catch (error) {
        console.log('Error connecting to DB', error);
    }
}