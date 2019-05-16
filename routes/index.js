const express = require('express');
const router = express.Router();

let arr = [];
for (let i =0; i < 20; i++)
{
	arr.push(i);
}

/* GET home page. */
router.get('/', function (req, res, next)
{
	res.render('index', {title: 'Adin Ballew', array: arr});
});

router.get('/interests', function (req, res, next)
{
	res.render('interests', {});
});

module.exports = router;
