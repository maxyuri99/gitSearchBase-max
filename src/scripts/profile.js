import { renderUserProjects } from "./render.js"

const showUserGit = async () => {
    const userJson = JSON.parse(localStorage.getItem('user'))
    const projectJson = JSON.parse(localStorage.getItem('project'))
    const userName = document.querySelector('.user__name')
    const userImg = document.querySelector('.user__img')

    console.log(userJson)
    if (userJson) {
        const renderList = document.querySelector('.profile__ul')

        if (userJson.name) {
            userName.innerText = userJson.name
        } else {
            userName.innerText = 'Nome não cadastrado'
        }

        userImg.src = userJson.avatar_url

        renderList.innerHTML = ''
        
        if (projectJson.length === 0) {
            const createMsgNull = document.createElement('li')
            createMsgNull.classList.add('project__null')
            createMsgNull.innerText = 'Este usuário não possui projetos'
            renderList.appendChild(createMsgNull)
        } else {
            projectJson.forEach(element => {
                renderList.appendChild(renderUserProjects(element))
            })
        }
    }
}

const buttonBack = () => {
    const buttonError = document.querySelector('.button__back-user')

    buttonError.addEventListener('click', () => {
        localStorage.removeItem('user')
        localStorage.removeItem('project')
        location.replace('../../index.html')
    })
}

showUserGit()
buttonBack()