window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};


letra = "X";

function jogo(bloco){
    blococlicada = document.getElementById(bloco).innerHTML;
   if (blococlicada == "X" || blococlicada == "O"){
       alert("Este bloco já foi escolhido!");
   }else{
        document.getElementById(bloco).innerHTML = letra;
        if (letra == "X"){
            letra = "O";
        }else{
            letra = "X";
        }
   }
}

function verifica(){
   bl11 = document.getElementById('b11').innerHTML;
   bl12 = document.getElementById('b12').innerHTML;
   bl13 = document.getElementById('b13').innerHTML;
   bl21 = document.getElementById('b21').innerHTML;
   bl22 = document.getElementById('b22').innerHTML;
   bl23 = document.getElementById('b23').innerHTML;
   bl31 = document.getElementById('b31').innerHTML;
   bl32 = document.getElementById('b32').innerHTML;
   bl33 = document.getElementById('b33').innerHTML;
   if (((bl11 != '') && (bl12 != '') && (bl13 != '') && (bl11 == bl12) && (bl12 == bl13)) || ((bl11 != '') && (bl22 != '') && (bl33 != '') && (bl11 == bl22) && (bl22 == bl33)) || ((bl11 != '') && (bl21 != '') && (bl31 != '') && (bl11 == bl21) && (bl21 == bl31)) || ((bl21 != '') && (bl22 != '') && (bl23 != '') && (bl21 == bl22) && (bl22 == bl23)) || ((bl31 != '') && (bl32 != '') && (bl33 != '') && (bl31 == bl32) && (bl32 == bl33)) || ((bl12 != '') && (bl22 != '') && (bl32 != '') && (bl12 == bl22) && (bl22 == bl32)) || ((bl13 != '') && (bl23 != '') && (bl33 != '') && (bl13 == bl23) && (bl23 == bl33)) || ((bl31 != '') && (bl22 != '') && (bl13 != '') && (bl31 == bl22) && (bl22 == bl13))){
       alert('Você ganhou! Parabéns!');
      novo();
   }
}

function novo(){
    for (i=1; i<4; i++){
       for (j=1; j<4; j++){
          nomebloco = 'b' + i + j
           document.getElementById(nomebloco).innerHTML = '';
      
      }
   }
}
