let myButton = document.getElementById('clickMe');

myButton.addEventListener('click', function() {
    let myInput = document.getElementById('inputName').value;
    let myImage = document.getElementById('myIMG');
    if (myInput) {
        myImage.setAttribute('src', `https://joeschmoe.io/api/v1/random ${myInput}`)  
    } else {
        myImage.setAttribute('src', `images/welcome.jpg`)
    }    
});
