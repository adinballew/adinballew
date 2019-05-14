const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next)
{
	res.render('index', {title: 'Adin Ballew'});
});

router.get('/interests', function (req, res, next)
{
	res.render('interests', {});
});

module.exports = router;
