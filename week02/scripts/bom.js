

button.addEventListener('click', function() {
    // Code to execute when the button is clicked
    if (input.value.trim() !== '') { 
        const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_________');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.Value;

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.value = '';
    // input.focus();
});

// textContent = '❌'

li.append(deleteButton);

li.append(li);
     }
  });

