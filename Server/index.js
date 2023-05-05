const { createServer } = require("http");
const app = require("./app");
const db = require("./db");

const server = createServer(app);

server.listen(process.env.PORT, () => {
  console.log(db);
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
