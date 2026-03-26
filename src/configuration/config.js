import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT || 3000,
    mongodb: {
        uri: process.env.MONGO_URI || 'mongodb://makar:7557/localhost:27017/java62?authSours=admin',
        db: {
            name: process.env.DB_NAME || 'java62'
        }
    }
}

export default config;