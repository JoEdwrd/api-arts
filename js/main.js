//Example fetch using pokemonapi.co
let num = 0
document.querySelector('button').addEventListener('click', function(){
  num = 0
  getFetch()
})
document.querySelector('#left').addEventListener('click', function(){
  num -= 1
  getFetch()
})
document.querySelector('#right').addEventListener('click', function(){
  num += 1     
  getFetch()
})    
function getFetch(){
  const mentionTitle = document.querySelector('input').value
  const url = `https://api.artic.edu/api/v1/artworks/search?q=${mentionTitle}&query[term][is_public_domain]=true&limit=5&fields=id,title,image_id,thumbnail`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(num < 0) num = 0
        if(num > data.data.length - 1) num = data.data.length - 1
        document.querySelector('h2').innerText = data.data[num].title
        document.querySelector('img').src = `https://www.artic.edu/iiif/2/${data.data[num].image_id}/full/843,/0/default.jpg`
        document.querySelector('h3').innerText = data.data[num].thumbnail.alt_text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}