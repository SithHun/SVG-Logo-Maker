const { Triangle, Circle, Square } = require("./shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

function generateLogo() {
  inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter your logo text (up to three characters):',
        validate: function(value) {
            if (value.length > 3) {
                return 'Please enter up to three characters only.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter your logo text color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose your logo shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter your logo shape color.',
    }
  ]).then((answers) => {
    let shape;

    switch (answers.shape) {
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
      case "Circle":
      default:
        shape = new Circle();
    }

    shape.setColor(answers.shapeColor);

    const svgLogo = `
        <svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${
          answers.textColor
        }">${answers.text}</text>
      </svg>
    `;

    fs.writeFileSync("./examples/logo.svg", svgLogo, "utf8");
    console.log("Generated logo.svg");
  });
}

module.exports = { generateLogo };
