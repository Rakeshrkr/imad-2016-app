var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));


var aboutus={
    title: "Abous Us | Rakesh" ,
    heading: "Login Page" ,
    date: "5th sept 2016" ,
    content: `<div>
        <p>This is the content of About us page. This is the content of About us page.This is the content of About us page. This is the content of About us page. This is the content of About us page.  </p>
        <p>This is the content of About us page. This is the content of About us page.This is the content of About us page. This is the content of About us page. This is the content of About us page.  </p>
        <p>This is the content of About us page. This is the content of About us page.This is the content of About us page. This is the content of About us page. This is the content of About us page.  </p>
    </div> `
};

function createTamplete(data){
    var title = data.title;
    var heading =data.heading;
    var date = data.date;
    var content = data.content;
    
var htmltemplete=`
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
    <h2>A${heading}</h2>
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
app.get('/aboutUs',function(req,res){
  res.send(createTamplete(aboutus));
});
app.get('/Login',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
});
app.get('/Logout',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'Logout.html'));
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
