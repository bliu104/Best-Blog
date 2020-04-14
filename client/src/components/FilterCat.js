export const filter = (array, catagories) => {
  const filteredArray = []
  array.map(recipe => {
    if (recipe.catagories.toLowerCase() === catagories.toLowerCase()) {
      filteredArray.push(recipe)
    }
  })
  return filteredArray
}

export const filterTags = (array, tags) => {
  const filteredArray = []
  array.map(recipe => {
    console.log(recipe)
    if (recipe.tag.toLowerCase().includes(tags.toLowerCase()) || (recipe.catagories.toLowerCase().includes(tags.toLowerCase()))) {
      filteredArray.push(recipe)
    }
  })
  return filteredArray
}