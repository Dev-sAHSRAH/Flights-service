const express = require("express");

const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const { City, Airport } = require("./models");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server");
});
