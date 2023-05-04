export const chefsLoader = async () => {
    const response = await fetch('chefs.json')
    const data = await response.json()

    console.log(data)
}

export const getRecipeDB = () => {
    const data = localStorage.getItem('recipeDB')
    if(data) {
        const dataAr = data.split(',')
        return dataAr.map(item => parseInt(item))
    }
    else localStorage.setItem('recipeDB', [])
    
}

export const setRecipeDB = (ids) => {
     localStorage.setItem('recipeDB', ids)
    
}

export const deleteRecipeDB = () => {
    localStorage.removeItem("recipeDB");
}