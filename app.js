const express = require('express');
const app= express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(_dirname, 'public')));

app.use((req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const date = new Date();
    console.log(`Request ${method} on path ${url} ${date}`);
    next();
})

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
            <a href="/add-student">Add Student </a>
            <a href="/students"> Student </a>

        </body> 
    </html>      
    `);
});

//student endpoint
app.post('/student', (req,res)=>{
    const student = {
        name: req.body.name,
        surname: req.body.surname,
        studies: req.body.studies,
    };
    students.push(student);

    res.title = "Success";
    res.body = `Successfully added <b> ${student.name} ${student.surname}</b>`
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>${res.title}</title>
        </head>
        <body>
            <p>${res.body}</p>
            <a href="/home">Add Home </a>
        </body> 
    </html>      
    `);
});

// add-student endpoint
app.get('/add-student', (req,res)=>{
    res.title = "ADD-STUDENT";
    res.body = `
    <form action="/student"method="post">
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" required>
        <br>
        <label for="surname">Surname: </label>
        <input type="text" name="surname" id="surname" required>
        <br>
        <label for="studies">Studies: </label>
        <input type="text" name="studies" id="studies" required>
        <br>
        <button type="submit">Submit!</button>
    </form>

    `;
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>${res.title}</title>
        </head>
        <body>
            <p>${res.body}</p>
            <a href="/students"> Student </a>
            <a href="/home">Add Home </a>

        </body> 
    </html>      
    `);
});

app.get('/students', (req, res) => {
    res.title = 'Students';
    const studentList = students.map((student, index)=>{
        return`<p>${student.name} ${student.surname} - ${student.studies}</p> `;

    }).join('');
    res.body = `<ul>${studentList}</ul>`;
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${res.title}</title>
      </head>
      <body>
        ${res.body}
        </body>
        </html>
    `);
});

app.listen(PORT,()=>{
    console.log('Setver listening on port 3000');
});
