console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogContainer = document.querySelector('#dog-image-container')
const breedListContainer = document.querySelector('#dog-breeds')
const alphabetSelector = document.querySelector('#breed-dropdown')
console.log(`alphabetize: ${alphabetSelector}`)

function getDogPictures(){
    fetch(imgUrl)
    .then((resp) => resp.json())
    .then((dogArray) => {
        //console.log(dogArray)
        dogPicture(dogArray)
    })
}

function getDogBreeds(){
    fetch(breedUrl)
    .then((resp) => resp.json())
    .then((array) => {
        //console.log(array)
        dogBreeds(array)
    })
}

function dogPicture(dogArray) {
    dogArray.message.forEach(function (value){
        const dogImg = document.createElement('img')
        dogImg.src = value
        dogContainer.append(dogImg)
        
    })
}

function dogBreeds(breedArray){
    for(let key in breedArray.message){
        const breedList = document.createElement('li')
        breedList.textContent = key
        breedListContainer.append(breedList)
    }

    const dogBreedClick = document.querySelectorAll('li')
    const clickListArray = Array.from(dogBreedClick)
    clickListArray.forEach(function(item) {
        item.addEventListener('click', function() {
           item.style.color = 'Red'
        })
    })
}

// const selector = document.getElementById('breed-dropdown')ß
// console.log(selector)
// selector.addEventListever('onchange', function() {
//     console.log(selector.value)
// })





getDogPictures()
getDogBreeds()