var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const data = await (await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + req.query.code)).data;
  res.jsonp({ data: data });
});



module.exports = router;
