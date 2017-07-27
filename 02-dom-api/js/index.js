function addImageToHTML(pokemon){
    let img = new Image()
    img.src = 'images/' + pokemon.id + '.png'
    img.title= pokemon.name + ' | ' + pokemon.type
    document.body.appendChild(img)
}

pokeDB
    //.filter( pokemon => pokemon.type === 'Fire')
    .forEach(addImageToHTML)