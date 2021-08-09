



export const getGifs = async(Category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=UyuPQHM82nZYujBxhqUUl8g6vnkbxUYO&q=${encodeURI(Category)}&limit=10`;
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();
        
        const gifs = data.map ( img => { 
            
            return {
                id : img.id,
                title :  img.title,
                url : img.images?.downsized_medium.url
                 }
    })
      return gifs;
}   
