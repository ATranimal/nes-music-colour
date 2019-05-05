var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET database listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./nesmdb_midi/test/231_MetalFighter__00_01MainBGM.mid', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    var data = data.toString('base64');
    var dataUri = 'data:text/plain,' + data;
    
    res.send( {
      midi: dataUri
    });
  });
});

module.exports = router;
