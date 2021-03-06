const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');

const employ = new Employee();

function buildTeam() {
    const myTeam = 
`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    <header class="text-bg-info p-2">
        <h1>My Team</h1>
    </header>
    <body class="container">
        <section class = "row">`
    fs.writeFile("dist/index.html", myTeam, (err, data) =>
    err ? console.log(err) : console.log(""));
    employ.getRole();
};

buildTeam();
