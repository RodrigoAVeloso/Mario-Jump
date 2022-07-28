const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const birds = document.querySelector('.birds');

const pontuacao = document.querySelector('.pontuacao');
const record = document.querySelector('.record');
let pontos = 0;
let pontosMaximos = 0;

 const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
 }

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    const birdsPosition = birds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom =`${marioPosition}px`;

        mario.src ='./img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        birds.style.animation = 'none';
        birds.style.left = `${birdsPosition}px`;

        if(pontos > pontosMaximos){
            pontosMaximos = pontos;
        }
        record.innerHTML =  `Pontuação final ${pontosMaximos}`;
         
        pontos =0;
        pontuacao.innerHTML = "Game Over";
        pontuacao.style.left = '42%';


        clearInterval(loop);
        clearInterval(ponto);

    }

},10)

const ponto = setInterval(() =>{
    pontos++;
    pontuacao.innerHTML = pontos;
},1500)

document.addEventListener('keydown', jump);