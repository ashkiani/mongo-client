# mongo-client
Reusable MongoDB client utility for Node.js projects.

````markdown
# @ashkiani/mongo-client

Reusable MongoDB client utility for Node.js projects.  
Provides a simple and consistent way to connect, retrieve, and close a shared MongoDB client instance using environment-based configuration.

---

## 📦 Installation

```bash
npm install @ashkiani/mongo-client
````

---

## 🛠 Usage

### 1. Set your environment variable:

Make sure your project defines the MongoDB URI as:

```
Mongo_URI=mongodb://username:password@host:port/dbname
```

---

### 2. Import and use in your Node.js code:

```js
const dbClient = require('@ashkiani/mongo-client');

(async () => {
    await dbClient.connect();  // establish connection once

    const client = dbClient.get();
    const collection = client.db('your-db-name').collection('your-collection');

    const results = await collection.find({}).toArray();
    console.log(results);

    await dbClient.close();  // optional: close if shutting down app
})();
```

---

## 📘 API

### `connect()`

Establishes a connection to MongoDB using the URI from `process.env.Mongo_URI`.

### `get()`

Returns the connected `MongoClient` instance for reuse.

### `close()`

Closes the MongoDB connection.

---

## 💡 Notes

* This module is designed to be used as a singleton across your app.
* Connection URI should be stored securely in environment variables (`.env` or your deployment config).
* Built using the official [`mongodb`](https://www.npmjs.com/package/mongodb) package.

---

## 📄 License

MIT © [Siavash Ashkiani](https://github.com/ashkiani)

