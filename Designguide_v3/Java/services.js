let button = document.querySelectorAll('.services__btn')

//buttonSelect.addEventlistener('click', () => {
//  buttonSelect.classlist.toggle('.--active')
//})
console.log(button);

button.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        buttons.classList.toggle('--active')
    })
})