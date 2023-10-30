alert('Seja bem vindo ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() *100 + 1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero 10.
while (chute != numeroSecreto) {
      chute = prompt('Escolha um número entre 1 e 100');
   // se chute for igual ao número secreto
    if(chute == numeroSecreto ) {
       break;
   }else{
    if(chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
     tentativas++;
  }
}


  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  alert(`Muito bom! Você acertou o número uhullll ${numeroSecreto} com ${tentativas} ${palavraTentativa} .`);

   

    