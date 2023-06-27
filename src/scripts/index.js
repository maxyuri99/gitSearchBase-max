import { getUserGit } from "./request.js";

const searchUser = () => {
    const inputUser = document.querySelector('.index__input')
    const buttonSearch = document.querySelector('.index__button')
    const spinner = document.querySelector('.spinner')
    
    buttonSearch.addEventListener('click', async () => {
        spinner.classList.remove('hidden')
        const user = inputUser.value
        
        await getUserGit(user)

        spinner.classList.add('hidden')
    })    
}

searchUser()
