
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
    let p = document.createElement('p');
    let form = document.querySelector('form');
    let reset = document.createElement('button');
    // Paragraph styling
    p.innerText = val;
    p.style = "margin-right: 3rem; margin-left: 2rem; "
    document.querySelector('form').appendChild(p);
    form.insertBefore(p, form.children[1])
    p.setAttribute('id', 'display');
    // Magic 8 ball baseline set-up
    document.querySelector('img').src = './img/magic8ball_start.png';
    // document.querySelector('img').classList.add("animate");
    p.classList.add( 'spin-anim','pclass');
    // document.getElementById('display').innerHTML = val; 
    document.getElementById('quest').style.display = 'none';
    //Removes shaking animation
    
    setTimeout(() => {
        document.querySelector('img').classList.add("animate");
    }, 1700);
    setTimeout(() => {
        document.querySelector('img').classList.remove("animate");
    }, 2400);
    // Adds in fade-in animation along with new magic8ball image and displays it
    setTimeout(() => {
        document.querySelector('img').classList.add("fade-in");
        document.canvas.src = imgs[mg] 
    }, 2900);
    //Removes fade-in animation to restart the process
    setTimeout(() => {
        // p.classList.remove('spin-anim');
        document.querySelector('img').classList.remove("fade-in");
    }, 1800);
    setTimeout(() => {
        document.querySelector('form').appendChild(reset);
        form.insertBefore(reset, form.children[5]);
        reset.innerText = 'Reset';
        reset.classList.add('buty2');
        reset.setAttribute('type','button')
    }, 1900);
    setTimeout(() => {
        // p.classList.remove('spin-anim');
        document.getElementById('okie').disabled = true;
        reset.addEventListener('click', () => {
            document.getElementById('quest').style.display = 'block';
            document.getElementById("quest").value = ' ';
            document.querySelector('p').remove();
            reset.remove();
            document.getElementById('okie').disabled = false;
        })
    }, 2000);
    // setTimeout(() => {
    //     window.addEventListener('click', () => {
    //             document.getElementById('quest').style.display = 'block';
    //             document.getElementById("quest").value = ' ';
    //             document.querySelector('p').remove();
    //             document.getElementById('buty2').remove();
    //     })
    // }, 100); 
    // document.querySelector('form').appendChild(reset);
    // form.insertBefore(reset, form.children[5]);
    // reset.innerText = 'Reset';
    // reset.classList.add('buty2');
    // document.getElementById('buty2').addEventListener('click', () => {
    //     document.getElementById('quest').style.display = 'block';
    //     document.getElementById("quest").value = ' ';
    //     document.querySelector('p').remove();
    //     document.getElementById('buty2').remove();
    // })
}

