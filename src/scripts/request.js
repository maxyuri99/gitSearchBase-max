export const getUserGit = async (userName) => {
    const user = await fetch(`https://api.github.com/users/${userName}`, {
        method: "GET"
    })
    .then(async (response) => {
        if (response.ok) {
            const responseConvert = await response.json()
            const projectsArray = await searchProjects(responseConvert.repos_url)

            localStorage.setItem('user', JSON.stringify(responseConvert))

            localStorage.setItem('project', JSON.stringify(projectsArray))

            location.replace('./src/pages/profile.html')

        } else {
            throw new Error('Usuário não encontrado')
        }
    })
    .catch(() => {
      location.replace('./src/pages/error.html')
    })

    return user
}

export const searchProjects = async (urlSearch) => {
    const userProjs = await fetch(`${urlSearch}`, {
        method: "GET"
    })
    .then(async (response) => {
        if (response.ok) {
            const responseConvert = await response.json()
            return responseConvert
        } else {
            location.replace('./src/pages/error.html')
        }
    })
    
    return userProjs
}