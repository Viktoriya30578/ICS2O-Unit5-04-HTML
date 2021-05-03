document.getElementById('change-image').addEventListener('click',image)
document.getElementById('change-text').addEventListener('click',text)
document.getElementById('hide').addEventListener('click',hide)
document.getElementById('change-show').addEventListener('click',show)
document.getElementById('change-background').addEventListener('click',background)

function image () {
document.getElementById('picture').src = "./wolf.jpg"
}

function text () {
document.getElementById('text').innerHTML = "New Text"
}

function hide () {
document.getElementById('text').style.display = "none"
}

function show () {
document.getElementById('text').style.display = "block"
}

function background () {
document.body.style.backgroundColor ="blue"
}


