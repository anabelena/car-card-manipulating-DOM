const redColor = document.querySelector(".red")
const grayColor = document.querySelector(".gray")
const blackColor = document.querySelector(".black")

const cardButton = document.querySelector("#button")
const cardButtonFeedback = document.querySelector("#feedback")
//const cardButton = document.getElementById('button')

//accediendo a la imagen
const cardImage = document.querySelector(".card_image img")
const cardDescription = document.querySelector(".card_description")
const cardPrice = document.querySelector(".card_price")

//agregando evento a elemento 
redColor.addEventListener("click",() => {
    //cambiando propiedad en css
    cardButton.style.backgroundColor="red"
    cardImage.src = "./assets/mercedez_red.jpg"
})

grayColor.addEventListener('click',()=>{
    cardButton.style.backgroundColor = 'gray'
    cardImage.src = "./assets/mercedez_gray.jpg"
})


//TODO agregar el evento click al boton black


/*Crear etiqueta h3, agregarle una clase, un texto 
y lo vamos a inscrustar en el html desde JS */

//apprendChild
const etiquetaH3 = document.createElement("h3")
etiquetaH3.className = "tag"
etiquetaH3.textContent= "Este h3 viene desde JS"
//etiquetaH3.innerHTML = '<u> card </u>'
//cardDescription.appendChild(etiquetaH3)

const cardDescriptionH2 = document.querySelector('h2')
cardDescription.insertBefore(etiquetaH3,cardDescriptionH2)

// cambiando el contenido del precio
cardPrice.innerHTML = "13.02"

cardButton.addEventListener('click',()=>{
    cardButton.style.display = 'none'
    cardButtonFeedback.style.display = 'block'
    //usando libreria confetti
    confetti({
        particleCount:100,
        spread:70,
        origin: {y:1}
    })
})

cardButtonFeedback.addEventListener('click',()=>{
    cardButton.style.display = 'block'
    cardButtonFeedback.style.display = 'none'
})

//Libreria CONFETI