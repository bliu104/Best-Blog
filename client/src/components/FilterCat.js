export const filter = (array, catagories) => {
  const filteredArray = []
  array.map(recipe => {
    if (recipe.catagories === catagories) {
      filteredArray.push(recipe)
    }
  })
  return filteredArray
}