let input = document.querySelector('#name');
input.addEventListener('keyup', () => {
    document.querySelector('#greet').textContent = `Hello ${input.value}`;
})