var express = require('express')
var app = express();

app.set('port', (process.env.OPENSHIFT_NODEJS_PORT || 5000))
app.set('ip', (process.env.OPENSHIFT_NODEJS_IP))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello TNG! I\'m running at' + process.env.OPENSHIFT_APP_DNS)
})

app.listen(app.get('port'), app.get('ip'), function() {
  console.log("Node app is running at " +  app.get('ip') + ":" + app.get('port'))
})
