import { client } from "../../utils/database.js";

export default async function handler(request, response) {
  try {
    // Connect the client to the server, select db and collection
    await client.connect();
    const db = client.db("todoapp");
    const collection = db.collection("todos");

    // find, update or insert data - your code goes here:
    const data = await collection.find({}).toArray();
    // respond with data…
    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: "Something went wrong!" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
