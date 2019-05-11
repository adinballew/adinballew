const express = require('express');
const router = express.Router();

const testFolder = 'public/images/bowls';
const fs = require('fs');
const imgSrc = [];

fs.readdirSync(testFolder).forEach(file =>
{
	imgSrc.push(file);
});

/* GET home page. */
router.get('/', function (req, res, next)
{
	res.render('index', {title: 'Adin Ballew'});
});

router.get('/assignment1', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 1',
		partial: 'assignment1'
	});
});

router.get('/assignment2', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 2',
		partial: 'assignment2'
	});
});

router.get('/assignment3', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 3',
		partial: 'assignment3'
	});
});

router.get('/assignment4', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 4',
		partial: 'assignment4'
	});
});

router.get('/assignment5', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 5',
		partial: 'assignment5'
	});
});

router.get('/assignment6', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 6',
		partial: 'assignment6'
	});
});

router.get('/assignment7', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 7',
		partial: 'assignment7'
	});
});

router.get('/assignment8', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 8',
		partial: 'assignment8'
	});
});

router.get('/assignment9', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 9',
		partial: 'assignment9'
	});
});

router.get('/assignment10', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 10',
		partial: 'assignment10'
	});
});

router.get('/exam1', function (req, res, next)
{
	res.render('assignment', {
		title: 'Exam 1',
		partial: 'exam1'
	});
});

router.get('/assignment11', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 11',
		partial: 'assignment11'
	});
});

router.get('/assignment12', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 12',
		partial: 'assignment12'
	});
});

router.get('/assignment13', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 13',
		partial: 'assignment13'
	});
});

router.get('/assignment14', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 14',
		partial: 'assignment14'
	});
});

router.get('/assignment15', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 15',
		partial: 'assignment15'
	});
});

router.get('/assignment16', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 16',
		partial: 'assignment16'
	});
});

router.get('/assignment17', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 17',
		partial: 'assignment17'
	});
});

router.get('/assignment18', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 18',
		partial: 'assignment18',
		images: imgSrc
	});
});

router.get('/assignment19', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 19',
		partial: 'assignment19'
	});
});

router.get('/assignment20', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 20',
		partial: 'assignment20'
	});
});

router.get('/exam2', function (req, res, next)
{
	res.render('assignment', {
		title: 'Exam 2',
		partial: 'exam2'
	});
});

router.get('/assignment21', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 21',
		partial: 'assignment21'
	});
});

router.get('/assignment22', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 22',
		partial: 'assignment22'
	});
});

router.get('/assignment23', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 23',
		partial: 'assignment23'
	});
});

router.get('/assignment24', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 24',
		partial: 'assignment24'
	});
});

router.get('/assignment25', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 25',
		partial: 'assignment25'
	});
});

router.get('/assignment26', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 26',
		partial: 'assignment26'
	});
});

router.get('/assignment27', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 27',
		partial: 'assignment27'
	});
});

router.get('/assignment28', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 28',
		partial: 'assignment28'
	});
});

router.get('/assignment29', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 29',
		partial: 'assignment29'
	});
});

router.get('/assignment30', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 30',
		partial: 'assignment30'
	});
});

router.get('/exam3', function (req, res, next)
{
	res.render('assignment', {
		title: 'Exam 3',
		partial: 'exam3'
	});
});

router.get('/assignment31', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 31',
		partial: 'assignment31'
	});
});

router.get('/assignment32', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 32',
		partial: 'assignment32'
	});
});

router.get('/assignment33', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 33',
		partial: 'assignment33'
	});
});

router.get('/assignment34', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 34',
		partial: 'assignment34'
	});
});

router.get('/assignment35', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 35',
		partial: 'assignment35'
	});
});

router.get('/assignment36', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 36',
		partial: 'assignment36'
	});
});

router.get('/assignment37', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 37',
		partial: 'assignment37'
	});
});

router.get('/assignment38', function (req, res, next)
{
	res.render('assignment', {
		title: 'Assignment 38',
		partial: 'assignment38'
	});
});

router.get('/finalexam', function (req, res, next)
{
	res.render('assignment', {
		title: 'Final Exam',
		partial: 'finalexam'
	});
});

router.get('/finalexam2', function (req, res, next)
{
	res.render('assignment', {
		title: 'Final Exam Javascript',
		partial: 'finalexam2'
	});
});

router.get('/checklist', function (req, res, next)
{
	res.render('assignment', {
		title: 'Checklist',
		partial: 'checklist'
	});
});

router.get('/interests', function (req, res, next)
{
	res.render('interests', {});
});


module.exports = router;
