var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles={
    aboutUs: {
    title: "Abous Us | Rakesh" ,
    heading: "About us Page" ,
    date: "5th sept 2016" ,
    content: `<div>
        <p>This is the content of About us page. This is the content of About us page.This is the content of About us page. This is the content of About us page. This is the content of About us page.  </p>
        <p>This is the content of About us page. This is the content of About us page.This is the content of About us page. This is the content of About us page. This is the content of About us page.  </p>
        <p>This is the content of About us page. This is the content of About us page.This is the content of About us page. This is the content of About us page. This is the content of About us page.  </p>
    </div> `
},
    Login: {
    title: "Login | Rakesh" ,
    heading: "Login Page" ,
    date: "9th sept 2016" ,
    content: `<div>
        <p>This is the content of Login page. This is the content of Login page.This is the content of Login page. This is the content of Login page. This is the content of Login page.  </p>
        <p>This is the content of Login page. This is the content of Login page.This is the content of Login page. This is the content of Login page. This is the content of Login page.  </p>
        <p>This is the content of Login page. This is the content of Login page.This is the content of Login page. This is the content of Login page. This is the content of Login page.  </p>
    </div> `},
    Logout: { 
         title: "Logout | Rakesh" ,
    heading: "Logout Page" ,
    date: "15th sept 2016" ,
    content: `<div>
        <p>This is the content of Logout page. This is the content of Logout page.This is the content of Logout page. This is the content of Logout page. This is the content of Logout page.  </p>
        <p>This is the content of Logout page. This is the content of Logout page.This is the content of Logout page. This is the content of Logout page. This is the content of Logout page.  </p>
        <p>This is the content of Logout page. This is the content of Logout page.This is the content of Logout page. This is the content of Logout page. This is the content of Logout page.  </p>
    </div> `
        
    }
};
function createTamplete(data){
    var title = data.title;
    var heading =data.heading;
    var date = data.date;
    var content = data.content;
    
var htmlTemplete=`
<!Doctype html>
<html>
    <head>
        <title>
         ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
    </head>
<body  class="container">
    <div >
    <div>
        <a href="/">Home</a>
    </div>
    <hr>
    <h2>${heading}</h2>
    <div>
        ${date}
    </div>
        ${content}
    </div>
    
</body>

</html>
`;
return htmlTemplete ;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName ;
  res.send(createTamplete(articles[articleName]));
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
