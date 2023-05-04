export const chefsLoader = async () => {
    const response = await fetch('chefs.json')
    const data = await response.json()

    console.log(data)
}

export const getRecipeDB = () => {
    let ids = []
    const data = localStorage.getItem('recipeDB')
    if(data) {
        const dataAr = data.split(',')
        for(let id of dataAr) {
            ids.push(Number(id))
        }
    }

    return ids
}

export const addToRecipeDB = (id) => {
    let ids = getRecipeDB()

    if(ids) {
        ids.push(id)
        setRecipeDB(ids)
    }
}

export const deleteItem = (id) => {
    let ids = getRecipeDB()
    if(ids) {
        const index = ids.indexOf(id)

        if(index > -1) ids.splice(index, 1)
    }
    setRecipeDB(ids)
}

export const setRecipeDB = (ids) => {
     localStorage.setItem('recipeDB', ids)
    
}

export const deleteRecipeDB = () => {
    localStorage.removeItem("recipeDB");
}