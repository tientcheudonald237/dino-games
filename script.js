const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

function jump(){
    dino.classList.add('jump');
}

document.addEventListener('keydown', function(){
    if(dino.classList !== 'jump'){
        jump();
        setTimeout(function(){
            dino.classList.remove('jump');
        },300)
    }
});

let isAlive = setInterval(function(){
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    
    if(cactusleft < 50 && cactusleft > 0 && dinotop >= 155 ){
        alert(' Game Over');
    }
},9);