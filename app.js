const express = require('express');
const app= express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

//home endpoint
app.get('/home', (req,res)=>{
    res.title = "HOME";
    res.body = 'HOME PAGE';
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>${res.title}</title>
        </head>
        <body>
            <p>${res.body}</p>
        </body> 
    </html>      
    `);
});

//student endpoint
app.get('/student', (req,res)=>{
    res.title = "STUDENT";
    res.body = 'STUDENT PAGE';
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>${res.title}</title>
        </head>
        <body>
            <p>${res.body}</p>
        </body> 
    </html>      
    `);
});

// add-student endpoint
app.get('/add-student', (req,res)=>{
    res.title = "ADD-STUDENT";
    res.body = 'ADD-STUDENT PAGE';
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>${res.title}</title>
        </head>
        <body>
            <p>${res.body}</p>
        </body> 
    </html>      
    `);
});

app.listen(PORT,()=>{
    console.log('Setver listening on port 3000');
});
