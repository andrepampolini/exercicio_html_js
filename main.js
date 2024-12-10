// Função para validar o formulário
function validarFormulario() {
    // Obter os valores dos campos A e B
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    // Obter a div para mostrar a mensagem
    const mensagemDiv = document.getElementById("mensagem");

    // Sempre exibe a mensagem positiva
    mensagemDiv.textContent = "Formulário válido! Campo B é maior que o Campo A.";
    mensagemDiv.className = "mensagem-valida";

    // Verificar a condição de validação
    if (campoB <= campoA) {
        // Se inválido, exibe mensagem de erro
        mensagemDiv.textContent = "Erro: Campo B deve ser maior que o Campo A.";
        mensagemDiv.className = "mensagem-invalida";
        return false; // Impede o envio do formulário
    }
    
    return true; // Permite o envio do formulário
}