let express = require("express");
let router = express.Router();


let api = require(__dirname + "/../api/routes");

router.get("/", (req, res) =>{
    res.send('Ok 1')
});
router.use("/api", api);

module.exports = router;