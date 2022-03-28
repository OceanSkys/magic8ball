
//Until I can find a better process of getting images, I added a variable with all of them
imgs = ['./img/magic8ball_1.png','./img/magic8ball_2.png','./img/magic8ball_3.png','./img/magic8ball_4.png','./img/magic8ball_5.png','./img/magic8ball_6.png','./img/magic8ball_7.png','./img/magic8ball_8.png','./img/magic8ball_9.png','./img/magic8ball_10.png','./img/magic8ball_11.png','./img/magic8ball_12.png','./img/magic8ball_13.png','./img/magic8ball_14.png','./img/magic8ball_15.png','./img/magic8ball_16.png','./img/magic8ball_17.png','./img/magic8ball_18.png','./img/magic8ball_19.png','./img/magic8ball_20.png'];

// EventListener wasn't working because it was loading before the DOM was
window.onload=function(){
    let el = document.querySelector('form');
    // Added keypress so when user presses enter it wont submit new form
    el.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
        //Called ask function so we dont have to press button
        ask()
        event.preventDefault();
        }
    });
}

function ask() { 
    //console.log letting me know function worked
    console.log('You clicked/Entered!')
    let mg = Math.floor(Math.random() * imgs.length);
    let val = document.getElementById("quest").value;
    // Default starting template for magic8ball
    document.querySelector('img').src = './img/magic8ball_start.png';
    document.querySelector('img').classList.add("animate");
    //Removes shaking animation
    setTimeout(() => {
        document.querySelector('img').classList.remove("animate");
    }, 800);
    // Adds in fade-in animation along with new magic8ball image and displays it
    setTimeout(() => {
        document.querySelector('img').classList.add("fade-in");
        document.canvas.src = imgs[mg]
        document.getElementById('display').innerHTML = val;  
    }, 900);
    //Removes fade-in animation to restart the process
    setTimeout(() => {
        document.querySelector('img').classList.remove("fade-in");
    }, 100);
}


