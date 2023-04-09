
document.querySelectorAll(".drum").forEach(item =>
     {item.addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        
});
})


document.addEventListener("keydown", function(event){
    makeSound(event.key.toLowerCase());
    buttonAnimation(event.key.toLowerCase());
});

function makeSound(key){
    console.log(key)
    switch (key) {
        case "w":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(key){
    console.log(key)
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}
