var router = require('express').Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
var Image = require('../model/image');

router.get('/', function(req, res) {
	res.send('index.html');
});

router.post('/', upload.single('image'), function(req, res) {

	var image = new Image({
		path: req.file.path,
		name: req.body.name
	});

	image.save().then(function(response) {

		var image = "<img src=" + req.file.path + " />";
		var name = "<h1>" + req.body.name + "</h1>";
		var html = "<div class='text-center'>" + image + name + "</div>";

		res.send(html);

	}).catch(function(err) {
		console.log(err);
		res.send("<h1>Something went wrong</h1>")
	});

});

module.exports = router;