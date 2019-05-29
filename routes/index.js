const express = require('express');
const router = express.Router();
const skills = require('../model/skills');

let arr = [];
for (let i =0; i < 20; i++)
{
	arr.push(i);
}

/* GET home page. */
router.get('/', function (req, res, next)
{
	res.render('index', {title: 'Home', array: arr});
});

router.get('/about', function (req, res, next)
{
	res.render('about', {title: 'About', array: arr, skills: skills});
});

router.get('/projects', function (req, res, next)
{
	res.render('projects', {title: 'Projects', array: arr});
});

router.get('/contact', function (req, res, next)
{
	res.render('contact', {title: 'Contact', array: arr});
});

module.exports = router;
