const colors = ['red', 'orange', 'yellow', 'blue', 'green', 'maroon', 'crimson', 'teal', 'purple', 'pink', 'sienna'];

const wrapper = document.getElementById('wrapper');

const button = document.getElementById('button');

button.addEventListener('click', changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random()*colors.length);
  wrapper.style.backgroundColor = colors[colorIndex];
}
