// Variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finaljogo = false;

let jogador1 = "url('../image/idj-removebg-preview-removebg-preview.png')";
let jogador2 = "url('../image/download-removebg-preview.png')";

// Click botão 1
function clickBtn1() {
    jogadas++;
    let btn = document.getElementById('btn1');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn1 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn1 = "O";
        }
    }
    verificaGanhador();
}
function clickBtn2() {
    jogadas++;
    let btn = document.getElementById('btn2');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn2 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn2 = "O";
        }
    }
    verificaGanhador();
}
function clickBtn3() {
    jogadas++;
    let btn = document.getElementById('btn3');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn3 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn3 = "O";
        }
    }
    verificaGanhador();
}
function clickBtn4() {
    jogadas++;
    let btn = document.getElementById('btn4');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn4 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn4 = "O";
        }
    }
    verificaGanhador();
}
function clickBtn5() {
    jogadas++;
    let btn = document.getElementById('btn5');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn5 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn5 = "O";
        }
    }
    verificaGanhador();
}
function clickBtn6() {
    jogadas++;
    let btn = document.getElementById('btn6');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn6 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn6 = "O";
        }
    }
    verificaGanhador();
}
function clickBtn7() {
    jogadas++;
    let btn = document.getElementById('btn7');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn7 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn7 = "O";
        }
    }
    verificaGanhador();
}
function clickBtn8() {
    jogadas++;
    let btn = document.getElementById('btn8');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn8 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn8 = "O";
        }
    }
    verificaGanhador();
}
function clickBtn9() {
    jogadas++;
    let btn = document.getElementById('btn9');

    if (btn.value == " " && !finaljogo) {
        if (controle == 0) {
            controle = 1;
            btn.style.backgroundImage = jogador1;
            btn9 = "X";
        } else {
            controle = 0;
            btn.style.backgroundImage = jogador2;
            btn9 = "O";
        }
    }
    verificaGanhador();
}

// Verifica ganhador
function verificaGanhador() {
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

    /*Código X*/

    // Verifica se Jogador X Ganhou
    if (btn1 == 'X' && btn2 == 'X' && btn3 == 'X') {
        finaljogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador X Ganhou
    if (btn4 == 'X' && btn5 == 'X' && btn6 == 'X') {
        finaljogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador X Ganhou
    if (btn7 == 'X' && btn8 == 'X' && btn9 == 'X') {
        finaljogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador X Ganhou
    if (btn1 == 'X' && btn4 == 'X' && btn7 == 'X') {
        finaljogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador X Ganhou
    if (btn2 == 'X' && btn5 == 'X' && btn8 == 'X') {
        finaljogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador X Ganhou
    if (btn3 == 'X' && btn6 == 'X' && btn9 == 'X') {
        finaljogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador X Ganhou
    if (btn1 == 'X' && btn5 == 'X' && btn9 == 'X') {
        finaljogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador X Ganhou
    if (btn3 == 'X' && btn5 == 'X' && btn7 == 'X') {
        finaljogo = true;
        alert('O jogador X ganhou!');
        lblJogador.innerText = 'O jogador X ganhou!';
        lblJogadas.innerText = '';
        return;
    }

    /*Código O*/

    // Verifica se Jogador O Ganhou
    if (btn1 == 'O' && btn2 == 'O' && btn3 == 'O') {
        finaljogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador O ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador O Ganhou
    if (btn4 == 'O' && btn5 == 'O' && btn6 == 'O') {
        finaljogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador O ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador O Ganhou
    if (btn7 == 'O' && btn8 == 'O' && btn9 == 'O') {
        finaljogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador O ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador O Ganhou
    if (btn1 == 'O' && btn4 == 'O' && btn7 == 'O') {
        finaljogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador O ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador O Ganhou
    if (btn2 == 'O' && btn5 == 'O' && btn8 == 'O') {
        finaljogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador O ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador O Ganhou
    if (btn3 == 'O' && btn6 == 'O' && btn9 == 'O') {
        finaljogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador O ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador O Ganhou
    if (btn1 == 'O' && btn5 == 'O' && btn9 == 'O') {
        finaljogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador O ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se Jogador O Ganhou
    if (btn3 == 'O' && btn5 == 'O' && btn7 == 'O') {
        finaljogo = true;
        alert('O jogador O ganhou!');
        lblJogador.innerText = 'O jogador O ganhou!';
        lblJogadas.innerText = '';
        return;
    }
    // Verifica se aconteceu empate
    if (jogadas == 9) {
        finalJogo = true;
        lblJogador.innerText = 'Empate';
        lblJogadas.innerText = '';
        return;
    }

    if (controle == 0) {
        lblJogador.innerText = 'Jogador X';
    } else {
        lblJogador.innerText = 'Jogador O';
    }

    lblJogadas.innerText = '(' + (jogadas + 1) + 'ª Jogada)';

}

// Click do botão Reiniciar
function clickReiniciar() {

    btn1 = 0;
    btn2 = 0;
    btn3 = 0;
    btn4 = 0;
    btn5 = 0;
    btn6 = 0;
    btn7 = 0;
    btn8 = 0;
    btn9 = 0;
    controle = 0;
    jogadas = 0;
    finaljogo = false;

    //Reiniciar botão
    let b1 = document.getElementById('btn1');
    let b2 = document.getElementById('btn2');
    let b3 = document.getElementById('btn3');
    let b4 = document.getElementById('btn4');
    let b5 = document.getElementById('btn5');
    let b6 = document.getElementById('btn6');
    let b7 = document.getElementById('btn7');
    let b8 = document.getElementById('btn8');
    let b9 = document.getElementById('btn9');

    b1.style.backgroundImage = null;
    b2.style.backgroundImage = null;
    b3.style.backgroundImage = null;
    b4.style.backgroundImage = null;
    b5.style.backgroundImage = null;
    b6.style.backgroundImage = null;
    b7.style.backgroundImage = null;
    b8.style.backgroundImage = null;
    b9.style.backgroundImage = null;

    //Reiniciar Label
    let lblJogador = document.getElementById('lblJogador');
    let lblJogadas = document.getElementById('lblJogadas');

    lblJogador.innerText = 'Jogador X';
    lblJogadas.innerText = '(1ª Jogada)';
}

