const { Triangle, Circle, Square } = require('./shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');

function generateLogo() {
    inquirer
      .prompt(/*...a bunch of prompts oof...*/)
      .then(answers => {
        let shape;

        switch(answers.shape) {
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Square':
                shape = new Square();
                break;
            case 'Circle':
                default: 
                shape = new Circle();
        }

        // Too Lazy To Code RN   >:(

    });
};
        
module.exports = { generateLogo };