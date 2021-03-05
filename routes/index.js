let express = require("express");
let router = express.Router();


let api = require(__dirname + "/../api/routes");

router.use("/api", api);

module.exports = router;