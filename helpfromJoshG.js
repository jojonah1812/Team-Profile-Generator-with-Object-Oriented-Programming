
function display(){
    var htmlstr = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    `;
    for(var i = 0; i < employees.length; i++){  
        htmlstr += 
    `<div>
        <h1>name: ${employees[i].getName()}</h1>
        <h2>role: ${employees[i].getRole()}</h2>
        <p>id: ${employees[i].getId()}</p>
        <p>email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></p>
    </div>
    `;
    if(employees[i].getRole() === 'Manager'){
        htmlstr += 
        `<p>office number: ${employees[i].getOfficeNumber()}</p>
        `;
    }else if(employees[i].getRole() === 'Engineer'){
        htmlstr += 
        `<p>github: <a href="${employees[i].getGithub()}">${employees[i].getGithub()}</a></p>
        `;
    }else if(employees[i].getRole() === 'Intern'){
        htmlstr += 
        `<p>school: ${employees[i].getSchool()}</p>
        `;
    }
    }
    htmlstr += 
    `</body>
    </html>`;
    fs.appendFile('home.html', `${htmlstr}\n`, (err) =>
        err ? console.error(err) : console.log(htmlstr)
    );
}

