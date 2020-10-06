const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'Continue assim! Você está magrinho (a).';
        }else if (valorIMC < 25) {
            classificacao = 'Showww...com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'humm.. você está levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'Gordinho grau I.';
        }else if (valorIMC < 40){
            classificacao = 'Gordinho grau II';
        }else {
            classificacao = 'Obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Assim eu não consigo fazer o calculo!! Preencha todos os campos!!';
    }

}

calcular.addEventListener('click', imc);