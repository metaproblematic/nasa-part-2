
var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')


var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', express.static(__dirname))

app.get('/dangerInfo', function(req, res) {
	console.log(req.query);
	request(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${req.query.inputDate}&api_key=kvH7YYMSHHLrXycD0c6YAceA1a2fR1mKDZy4LdzK`, function (error, response, dataFromNasa) {
	  res.send(dataFromNasa)
	})
})

app.listen(8080, function() {
	console.log('listening on 8080')
})