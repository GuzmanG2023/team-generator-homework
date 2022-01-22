const divGenerator = (data) => {
    let result = ''
    for(let i = 0; i < data.length; i++) {
        if (data[i].officeNumber) {
            result += `<div class=\"manager\">
            <h2>Manager</h2>
            <p>${data[i].name}</p>
                <p>${data[i].id}</p>
                <a href="mailto:${data[i].email}">${data[i].email}</a>
                <p>${data[i].officeNumber}</p></div>`
        }
        else if (data[i].github) {
            result += `<div class=\"engineer\">
            <h2>Engineer</h2>
            <p>${data[i].name}</p>
                    <p>${data[i].id}</p>
                    <a href="mailto:${data[i].email}">${data[i].email}</a>
                    <a href="https://github.com/${data[i].github}">https://github.com/${data[i].github}</a></div>`
        }
        else {
            result += `<div class=\"intern\">
            <h2>Intern</h2>
            <p>${data[i].name}</p>
                    <p>${data[i].id}</p>
                    <a href="mailto:${data[i].email}">${data[i].email}</a>
                    <p>${data[i].school}</p></div>`
        }
    }
    return result
}

const html = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>Generator Crew</h1>
        </header>
    ${divGenerator(data)}
    </body>`
}

module.exports = {html}