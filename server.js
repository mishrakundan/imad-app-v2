var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
    title:  'Article One | kundan mishra',
    heading: 'Article one',
    date:'february 12, 2017',
    content: ` 
     <p>
                This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>
            <p>
                 This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>
            <p>
                 This is the content of my first article. This is the content of my first article. This is the content of my first article.
            </p>`  
},
'article-two' : {
    title: 'Article Two | kundan mishra',
    heading: 'Article two',
    date:'february 14, 2017',
    content: ` 
     <p>
                This is the content of my second article.
    </p>`
        
},
'article-three' : {
    title: 'Article Three | kundan mishra',
    heading: 'Article three',
    date:'february 16, 2017',
    content: `
     <p>
       This is the content of my third article.
    </p>`
}
};
function createTemplate (data) {
    var title =data.title;
    var date =data.date;
    var heading = data.heading;
    var content=data.content;
    
    var htmlTemplate =
    `<html>
       <head>
        <title>
           ${title}
      </title>  
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
     
    </head>    
    <body>
        <div class="container">
         <div>
              <a href="/">Home</a>
         </div>
         <hr/>
        <h3>
           ${heading} 
        </h3>
        <div>
            ${date}
       </div>
       <div>
           ${content}
        </div>
        </div>
    </body>
</html>`
;
return htmlTemplet;
}

app.get('/', function (req, res) {
     res.send(ceateTemplate(articles[articleName]));
   
   
});

app.get('/:articleName',function (req,res){
    // articleName==article-one
    // articles[articleName]=={}content object for article one   
    var articleName = req.params.articleName;
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    
});
app.get('/article-two',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    }); 

app.get('/article-three',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
