// Pegando dados do HTML
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const opChoice = document.getElementById('OpChoice');

function Calcular(){
    // Pegando dados do HTML
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const opChoice = document.getElementById('OpChoice');
    const result = document.getElementById('result');
    
    // Variável de resultado final
    let resultadoConta;

    // Switch case para escolher a operação
    switch (opChoice.value) {
        case 'mult':
            resultadoConta = (num1*num2)
        break

        case 'soma':
            resultadoConta = (num1+num2)
        break

        case 'subt':
            resultadoConta = (num1-num2)
        break

        case 'divi':
            if (num2 != 0) {resultadoConta = (num1/num2)}
            else {return result.textContent = 'Resultado: Conta inválida'}
        break

        case 'poten':
            resultadoConta = Math.pow(num1, num2);
        break

        case 'raiz':
            resultadoConta = Math.pow(num1, (1/num2));
        break
    }

    // Chamando a função de verificação e lhe dando o resultado!
    VerificaCampo(resultadoConta); 
}


// Função para verificar os campos!
function VerificaCampo(resultadoDaConta) {
    // Verificando se está vazio
    if (num1.value.trim() === '' || num2.value.trim() === ''){
        result.textContent = "Insira números!"
    } else {
        result.textContent = ('Resultado: '+ resultadoDaConta);
    }
}

// Chamando função de calcular
opChoice.addEventListener('change', Calcular);
num1.addEventListener('input', Calcular);
num2.addEventListener('input', Calcular);