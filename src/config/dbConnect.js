import 'dotenv/config';
import mongoose, { mongo } from 'mongoose';

async function databaseConnect() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const cluster = process.env.DB_CLUSTER;
  const dbName = process.env.DB_NAME;
  const dbClusterName = process.env.DB_CLUSTER_NAME;

  mongoose.connect(
    `mongodb+srv://${user}:${password}@${cluster}/${dbName}?retryWrites=true&w=majority&appName=${dbClusterName}`,
  );

  return mongoose.connection;
}

export default databaseConnect;
