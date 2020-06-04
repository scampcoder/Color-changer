
const colors = ['red', 'orange', 'yellow', 'blue', 'green', 'maroon', 'crimson', 'teal', 'purple', 'pink', 'sienna'];

const wrapper = document.getElementById('wrapper');

const button = document.getElementById('changer-colour');

button.addEventListener('click', function(){
  wrapper.style.backgroundcolor = colors[Math.floor(Math.random() * colors.length)];
});
