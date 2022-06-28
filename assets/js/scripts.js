var btn1 = document.getElementById('increment');
var btn2 = document.getElementById('decrement');
var currentNumber = 0;
// Criação de condicionais que desabilitam o botão de incrementar ou decrementar quando o contador chega a um determinado valor 
const limite = 9;
const limiteNegativo = -9;


/* addeventlistener faz com que dê a função de botão sem precisar aplicar diretament ao html com onclick*/
btn1.addEventListener('click', increment);
btn2.addEventListener('click', decrement);



function increment() {
// utilizei condicional 'if' para ajudar a desabilitar o botão, não sei se fiz certo, mas deu certo
    if (currentNumber <= limite)
    currentNumber = currentNumber+1;
    if(currentNumber >= 0) {
        document.getElementById('currentNumber').style.color="gold";
    }
    Mostrar()
    
}

function decrement() {
    if (currentNumber >= limiteNegativo)
    currentNumber = currentNumber - 1;
    if(currentNumber < 0) {
        document.getElementById('currentNumber').style.color="green";
    }
    Mostrar()
    
}
/*função mostrar faz com que apareça a alteração do contador na tela*/
function Mostrar() {
    /* Pode ser usao no lugar do getElement o querySelector*/
    var span = document.getElementById("currentNumber")
    span.innerHTML = currentNumber
}
