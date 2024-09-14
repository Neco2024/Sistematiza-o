document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate-btn');
    
    calculateButton.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = parseInt(document.getElementById('operation').value);
        let result = '';

        if (isNaN(num1) || isNaN(num2)) {
            result = "Erro: Um dos valores digitados não é um número.";
        } else {
            switch (operation) {
                case 1:
                    result = `Resultado: ${num1 + num2}`;
                    break;
                case 2:
                    result = `Resultado: ${num1 - num2}`;
                    break;
                case 3:
                    result = `Resultado: ${num1 * num2}`;
                    break;
                case 4:
                    if (num2 === 0) {
                        result = "Erro: Divisão por zero não é permitida.";
                    } else {
                        result = `Resultado: ${num1 / num2}`;
                    }
                    break;
                default:
                    result = "Erro: Escolha inválida.";
                    break;
            }
        }
        document.getElementById('result').textContent = result;
    });
});
