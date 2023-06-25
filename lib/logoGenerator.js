const { Triangle, Circle, Square } = require("./shapes.js");
const inquirer = require("inquirer");
const fs = require("fs");

function generateLogo() {
  inquirer.prompt(/*...a bunch of prompts oof...*/).then((answers) => {
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

    fs.writeFileSync("logo.svg", svgLogo, "utf8");
    console.log("Generated logo.svg");
  });
}

generateLogo();

module.exports = { generateLogo };
