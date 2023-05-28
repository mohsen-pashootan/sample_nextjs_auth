import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://pashootan:McR8JEGBcGIRk0Qw@cluster0.9lsnp.mongodb.net/myNextAuth?retryWrites=true&w=majority"
  );

  return client;
}
