const express = require('express');
const router = express.Router();
const nodeMailer = require("nodemailer");

const skills = require('../model/skills');

let arr = [];
for (let i = 0; i < 20; i++)
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

router.post('/send-email', function (req, res)
{
	let transporter = nodeMailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.user,
			pass: process.env.pass
		}
	});

	let mailOptions = {
		to: 'adinballew@gmail.com',
		subject: "Portfolio Contact",
		html: "<h1>" + req.body.name + "</h1>" +
			"<h3>" + req.body.email + "</h3>" +
			"<p>" + req.body.message + "</p>"
	};
	transporter.sendMail(mailOptions, (error, info) =>
	{
		if (error)
		{
			return console.log(error);
		}
		console.log('Message %s sent: %s', info.messageId, info.response);
	});
	res.writeHead(301, {Location: '/contact'});
	res.end();
});

module.exports = router;
