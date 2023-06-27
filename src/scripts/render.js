export const renderUserProjects = ({ name, description, html_url }) => {
    const liProj = document.createElement('li')
    const titleProj = document.createElement('h4')
    const descProj = document.createElement('p')
    const buttonProj = document.createElement('a')

    titleProj.innerText = name
    if (description === null) {
        descProj.innerText = 'Este projeto não tem descrição.'
    } else {
        descProj.innerText = description
    }

    buttonProj.innerText = 'Repositório'
    buttonProj.href = html_url
    buttonProj.target = '_blank'

    liProj.append(titleProj, descProj, buttonProj)

    return liProj
}