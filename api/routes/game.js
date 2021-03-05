let express = require("express");
let router = express.Router();

let {
  game
} = require("../controllers");

router.get('/', game.list);
router.post('/', game.create);
router.delete('/:id', game.delete);

module.exports = router;
