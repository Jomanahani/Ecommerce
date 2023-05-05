const { createServer } = require("http");
const app = require("./app");
const server = createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
