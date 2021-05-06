let button = document.querySelectorAll('.services__btn');
let addAllButton = document.querySelector('.addAll__btn')

console.log(button);

button.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        buttons.classList.toggle('--active')
    })
});


