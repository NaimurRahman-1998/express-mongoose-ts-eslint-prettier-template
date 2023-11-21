import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
dotenv.config();

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(process.env.PORT, () => {
      console.log(`server running on PORT ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();