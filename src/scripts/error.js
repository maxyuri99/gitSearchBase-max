const buttonBack = () => {
    const buttonError = document.querySelector('.button__back-index')

    buttonError.addEventListener('click', () => { 
        location.replace('../../index.html')
    })
}

buttonBack()