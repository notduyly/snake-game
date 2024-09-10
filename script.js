// Define HTML elements
const board = document.getElementById("game-board");

const gridSize = 20;
let snake = [{x: 10, y: 10}];
let food = generateFood();
let direction = "right"

//draw game map, snake, food
function draw() {
  board.innerHTML = "";
  drawSnake();
  drawFood();
}

function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment)
    board.appendChild(snakeElement);
  });
}

function drawFood() {
  const foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  board.appendChild(foodElement);
}

function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

function generateFood() {
  const x = Math.round(Math.random() * gridSize) + 1;
  const y = Math.round(Math.random() * gridSize) + 1;
  return {x, y};
}

