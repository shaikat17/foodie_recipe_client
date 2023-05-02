export const chefsLoader = async () => {
    const response = await fetch('chefs.json')
    const data = await response.json()

    console.log(data)
}