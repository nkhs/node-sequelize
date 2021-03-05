let express = require("express");
let router = express.Router();
const db = require(__dirname + "/../../models");

let {
  game
} = require("../controllers");





router.get('/', game.list);
router.post('/', game.create);
router.delete('/:id', game.delete);



var multer = require('multer');
var fs = require('fs');

var STORAGE_PATH = `./public-storage`;
if (!fs.existsSync(STORAGE_PATH)) fs.mkdirSync(STORAGE_PATH);

var upload = multer({ //multer settings
  storage: multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
      cb(null, STORAGE_PATH); //image storage path
    },
    filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, datetimestamp + '_' + file.originalname);
    }
  })
});


router.put('/upload/:idUsuario', upload.single('imagen'), (req, res) => {
  try {

    // res.send(req.file);

    const { idUsuario } = req.params;
    db.user.findOne({ where: { id: idUsuario } })
      .then(updateimg => {
        updateimg.update({ img: req.file.filename })
          .then(() => {
            res.status(200).send({ updateimg });
          })
          .catch(error => {
            res.status(500).send({ msg: 'Ocurrió un error al actualizar el usuario' });
          })
      })
      .catch(error => {
        console.log(error);
      });

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
