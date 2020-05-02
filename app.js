// if you want to remove the first child on the page everytime a key is pressed
document.body.addEventListener('keypress', function(){
    console.log('remove first child')
    document.querySelector('#contain-all').firstElementChild.remove()
})
