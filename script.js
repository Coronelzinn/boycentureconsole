
let indexAtual = 0;

function changeimage(direcao) {
  const imagens = document.querySelectorAll('#carrosel img');
  
  imagens[indexAtual].className = 'imageoff';
  
  indexAtual = indexAtual + direcao;
  
  if (indexAtual >= imagens.length) {
    indexAtual = 0;
  }
  
  if (indexAtual < 0) {
    indexAtual = imagens.length - 1;
  }
  
  imagens[indexAtual].className = 'imageon';
}

document.addEventListener('DOMContentLoaded', function() {
  const btnHamburguer = document.querySelector('.hamburguer');
  const menuDropdown = document.getElementById('options');

  if (btnHamburguer && menuDropdown) {
    
    btnHamburguer.addEventListener('click', function(event) {
      event.stopPropagation(); 
      btnHamburguer.classList.toggle('aberto'); 
      menuDropdown.classList.toggle('ativo');  
    });

    window.addEventListener('click', function(event) {
      if (!menuDropdown.contains(event.target) && !btnHamburguer.contains(event.target)) {
        btnHamburguer.classList.remove('aberto');
        menuDropdown.classList.remove('ativo');
      }
    });

    const choose = document.getElementById("choose");
const boyImage = document.getElementById("boyImage");

choose.addEventListener("change", function () {

    if (choose.value === "basic") {
        boyImage.src = "img/Boy Basic.jpeg";
    }

    if (choose.value === "evolute") {
        boyImage.src = "img/Boy Evolute.jpeg";
    }

    if (choose.value === "max") {
        boyImage.src = "img/Boy Max.jpeg";
    }

});
  }
});

const selectJogo = document.getElementById('choosegame');
const imagemJogo = document.getElementById('gamechange');

selectJogo.addEventListener('change', function() {
   
    imagemJogo.src = this.value;
});

console.log("O script foi carregado!"); // Vai aparecer no F12

document.addEventListener("DOMContentLoaded", function() {
    const inputTip = document.getElementById('tip');
    const btnEnviar = document.getElementById('btn-enviar');
    const successMsg = document.getElementById('successmsg');

    if (!btnEnviar) {
        console.error("ERRO: O botão com ID 'btn-enviar' não foi encontrado!");
        return;
    }

    btnEnviar.addEventListener('click', function() {
        console.log("Botão clicado!"); // Vai aparecer quando você clicar
        
        if (inputTip.value.trim() === "") {
            alert("Por favor, digite alguma dica antes de enviar!");
            return;
        }

        successMsg.classList.remove('hidden');
        inputTip.value = "";

        setTimeout(function() {
            successMsg.classList.add('hidden');
        }, 4000);
    });
});

