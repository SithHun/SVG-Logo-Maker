const { Triangle, Circle, Square } = require('./shapes');

describe('Shape classes', () => {
  test('Triangle should render SVG', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

});