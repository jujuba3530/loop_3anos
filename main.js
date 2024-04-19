
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("ACEITA JESUS");

    
    if (respostaTime.toLowerCase() === "SIM") {
      alert("BOA ! NOS VEMOS NA ETERNIDADE");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
