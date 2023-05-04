const app = require("./index");
const connect = require("../meesho-backend/db/db");
const port = process.env.port || 5555;

app.listen(port, async () => {
  await connect();
  console.log("port is listening");
});
