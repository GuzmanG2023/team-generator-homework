const inquirer = require ("inquirer")
const fs = require ("fs")

const Manager = require ("./lib/Manager")
const Engineer = require ("./lib/Engineer")
const Intern = require ("./lib/Intern")
const html = require ("./src/html")

let employeeDataArr = [];

const employeeTypeQuestion = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'What Kind Of Employee Is Selected',
        choices: ['Engineer', 'Intern'],
        default: 'Engineer'
    }
]

const confirmOtherEmployee = [
    {
        type: 'confirm',
        name: 'confirmAdd',
        message: 'Would You Like To Add Another Employee?'
    }
]

const engineer = [
    {
        type:'input',
        name: 'engineerName',
        message: 'What Is The Engineers Name?'
    },
    {
        type:'input',
        name: 'engineerId',
        message: 'What IS The Engineers ID?'
    },
    {
        type:'input',
        name: 'engineerEmail',
        message: 'What Is The Engineers Email?'
    },
    {
        type:'input',
        name: 'githubUserName',
        message: 'What Is The Engineers GitHub Username?'
    }
]

const intern = [
    {
        type:'input',
        name: 'internName',
        message: 'What Is The Interns Name?'
    },
    {
        type:'input',
        name: 'internId',
        message: 'What IS The Interns ID?'
    },
    {
        type:'input',
        name: 'internEmail',
        message: 'What Is The Interns Email?'
    },
    {
        type:'input',
        name: 'schoolName',
        message: 'What Is Your School Name?'
    }
]

const manager = [
    {
        type:'input',
        name: 'managerName',
        message: 'What Is The Name Of The Manager?'
    },
    {
        type:'input',
        name: 'managerId',
        message: 'What Is The Manager\'s ID?'
    },
    {
        type:'input',
        name: 'managerEmail',
        message: 'What Is The Managers Email?'
    },
    {
        type:'input',
        name: 'officeNumber',
        message: 'What Is The Office Number?'
    }
]

const managerQuestion = () => {
    return inquirer.prompt(manager)
}

const internQuestion = () => {
    return inquirer.prompt(intern)
    .then (data => {
        let {internName, internId, internEmail, schoolName} = data;
        let intern = new Intern(internName, internId, internEmail, schoolName)
        employeeDataArr.push(intern)
        return otherEmployee()
    })
}

const engineerQuestion = () => {
    return inquirer.prompt(engineer)
    .then (data => {
        let {engineerName, engineerId, engineerEmail, githubUserName} = data;
        let engineer = new Engineer(engineerName, engineerId, engineerEmail, githubUserName)
        employeeDataArr.push(engineer)
        return otherEmployee()
    })
}

const typeOfQuestion = () => {
    return inquirer.prompt(employeeTypeQuestion)
    .then(data => {
        if (data.employeeType === 'Engineer') {
            return engineerQuestion()
        }
        else {
            return internQuestion()
        }
    })
}

const otherEmployee = () => {
    return inquirer.prompt(confirmOtherEmployee)
    .then (data => {
        if (data.confirmAdd) {
            return typeOfQuestion()
        }
        else {return}
    })
}
const writeFile = () => {
    return fs.writeFile('./output/index.html', html.html(employeeDataArr), error => {
        if (error) throw new Error(error);
        console.log('paper created')
    })
}

const init = () => {
    managerQuestion()
    .then(data => {
        let {managerName, managerId, managerEmail, officeNumber} = data;
        let manager = new Manager(managerName, managerId, managerEmail, officeNumber)
        employeeDataArr.push(manager)
        return
    })
    .then(typeOfQuestion)
    .then(writeFile)
    .catch(error => {console.log(error)});
}

init ()
