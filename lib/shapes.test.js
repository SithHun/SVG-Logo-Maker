const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
  test('Triangle should render SVG', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
  
  test('Circle should render SVG', () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Square should render SVG', () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />');
  });

});