// Create web server
var express = require('express');
var app = express();

// Include body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Include mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/comments');

// Create schema
var commentSchema = new mongoose.Schema({
	name: String,
	comment: String
});

// Create model
var Comment = mongoose.model('Comment', commentSchema);

// Set ejs as view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static('public'));

// Create routes
app.get('/', function(req, res) {
	Comment.find({}, function(err, comments) {
		if (err) {
			console.log(err);
		} else {
			res.render('index', {comments: comments});
		}
	});
});

app.post('/comment', function(req, res) {
	var name = req.body.name;
	var comment = req.body.comment;
	var newComment = {name: name, comment: comment};
	Comment.create(newComment, function(err, comment) {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/');
		}
	});
});

app.listen(3000, function() {
	console.log('Server is running...');
});