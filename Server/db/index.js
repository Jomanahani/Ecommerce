const { MongoClient } = require("mongodb");

class DbConnection {
  constructor() {
    this.client = new MongoClient(process.env.DATABASE_URL);
    this.database = this.client.db("Brand");
    this.test();
  }

  test() {
    const products = this.database.collection("products");
    const re = products.insertOne({ id: 1, name: "shoes" });
    console.log(re);
  }
}

const db = new DbConnection();
module.exports = db;
