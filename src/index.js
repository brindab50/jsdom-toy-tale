let addToy = false;



document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  
  });

  getToys()


  function getToys(){
    return fetch(' http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(toys => {
      toys.forEach(toy => {
        console.log(toy)
        renderToys(toy)
      })
    })
    }
  
  
    function renderToys(toy){
      let divCollection = document.querySelector('#toy-collection')
      let h2  = document.createElement('h2')
      h2.innerHTML = toy.name
      let img = document.createElement('img')
      img.setAttribute('src', toy.image )
      img.setAttribute('class', "toy-avatar")
      let p = document.createElement('p')
      p.innerText = `${toy.likes} likes`
      let btn = document.createElement('button')
      btn.setAttribute('id', 'like-btn', toy.id)
      btn.innerText = "like"
      btn.addEventListener('click', (e) => {
        console.log(e.target.dataset)
        likes(e)
      })
  
      let divCard = document.createElement('div')
      divCard.setAttribute('class', 'card')
      divCard.append(h2, img, p ,btn)
      divCollection.append(divCard)
  
    }

});
// grab the add toy elemet 
// create a event listener to the add toy button
// grab to toy form container 
// create a function that adds toys and takes in an argument 
// of the toy data 
//create a post request for that new toy
// once jasonfied 
// run the render toy function and give it the returned 
// javascript data as an argument

// 
debugger

addBtn.addEventListener('click', () => {
  addToy = !addToy
  if(addToy){
    toyForm.style.display.block
    toyForm.addEventListener('submit', event => {
      event.preventDefault()
      addToys(event.target)
    })

  }
})

function addToys(toy_data){
  fetch('http://localhost:3000/toys', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify({
      "name": toy_data.name.value,
      "image": toy_data.image.value,
      "likes": 0

    })
  })
  .then(resp => resp.json())
  .then((obj_toy) => {
    renderToys(obj_toy)
  })
}







// render toys


  // create a fucntion that renderToys that takes a toy as a argument
  // grab the toy collection 
  // create a h2 element and assign the toy name 
  // create an element for the toy image and then 
  // set the attributes for the image and class name 
  // create a p tag for the number of likes 
  // set the innerText of p tag interpolate the number of likes 
  // create a button element 
  // set the buttons attirbutes to toy.id and like btn
  // set the innertext of the button to like 
  // add an event listener to the button 
  // create a div element 
  // set the divs attirbute 
  // append the h2, img, p , btn to the div 
  // append the div card on the div collection