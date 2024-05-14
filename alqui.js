const { MongoClient } = require('mongodb');

// Example usage with async/await
async function main() {
  const uri = 'your_mongodb_uri_here';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    // Perform operations on the database
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
