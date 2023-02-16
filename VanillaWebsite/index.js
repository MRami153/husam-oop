const theTextElement = document.getElementById('theText')
const theTextStr = theTextElement.innerText

function deleteText() {
    theTextElement.innerText = ''
    deleteButton.toggleAttribute('disabled')
    putBackButton.toggleAttribute('disabled')
    
    putBackButton.setAttribute('class', 'button green-button')

    for (const oneBox of usefulBoxes) {
        oneBox.toggleAttribute('hidden')
    }

    for (const oneBox of uselessBoxes) {
        oneBox.toggleAttribute('hidden')
    }
}

function putBackText() {
    theTextElement.innerText = theTextStr 
    putBackButton.toggleAttribute('disabled')
    deleteButton.toggleAttribute('disabled')

    putBackButton.setAttribute('class', 'button')  
}

const deleteButton = document.getElementById('deleteButton')
deleteButton.onclick = deleteText

const putBackButton = document.getElementById('putBackButton')
putBackButton.onclick = putBackText

const usefulBoxes = document.getElementsByClassName('useful')
const uselessBoxes = document.getElementsByClassName('useless')

uselessBoxes[0].onclick = function () {
    for (const oneBox of usefulBoxes) {
        oneBox.toggleAttribute('hidden')
    }

    this.toggleAttribute('hidden')
}