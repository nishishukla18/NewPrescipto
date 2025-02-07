import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const connectCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });

        if (!process.env.CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
            throw new Error('Cloudinary environment variables are missing');
        }

        console.log('Cloudinary configured successfully');
    } catch (error) {
        console.error('Error configuring Cloudinary:', error.message);
        process.exit(1); // Exit process if configuration fails
    }
};

export default connectCloudinary;
