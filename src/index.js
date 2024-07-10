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

  const bengaluru = await City.findByPk(1);
  // console.log(bengaluru);
  // bengaluru.createAirport({ name: "Hoskote Airport", code: "HSK" });
  // bengaluru.createAirport({ name: "Kempegowda Airport", code: "BLR" });

  const airportsInBlr = await bengaluru.getAirports();
  console.log("BENGALURU\n", airportsInBlr);

  const hskAirport = await Airport.findByPk(1);
  console.log(hskAirport);
  // await bengaluru.removeAirport(hskAirport);
  await City.destroy({
    where: {
      id: 1,
    },
  });
});
