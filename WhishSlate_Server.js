var ogs = require('open-graph-scraper');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use( express.static( "views" ) );

app.get('/bookmarklet', function(req, res) {
    res.render('pages/bookmarklet');
});

app.get('/', function (req, res) {
  if(req.query['u']){

    var siteUrl = req.query['u'];
    var options = {
      'url': siteUrl,
      'headers': {
        'accept-language': 'en'
      },
      'timeout': 4000
    };

    ogs(options, function (err, results, response) {
      if(results.err){
        //res.json(results.err);
      } else {
        //res.json(results);
        //res.end();

        res.render('pages/index', {
    results: results
  });

        
      }
    });
  }


  

});

var port = process.env.PORT || 5000;
app.listen(port);

console.log("WhishSlate Bookmarklet server listening on port %d", port);




