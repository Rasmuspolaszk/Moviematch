let button = document.querySelectorAll('.genre__option')

//buttonSelect.addEventlistener('click', () => {
//  buttonSelect.classlist.toggle('.--active')
//})
console.log(button);

button.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        buttons.classList.toggle('--active')
    })
})

let addAllButton = document.querySelectorAll('.addAll__btn')

//buttonSelect.addEventlistener('click', () => {
//  buttonSelect.classlist.toggle('.--active')
//})
console.log(addAllButton);

addAllButton.forEach((buttons) => {
    buttons.addEventListener('click', () => {
        buttons.classList.toggle('--active')
    })
})