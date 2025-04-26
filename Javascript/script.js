
//document.addEventListener('DOMContentLoaded', function() { ... }); ,espera o HTML da página carregar completamente antes de executar o JavaScript, pois garante que todos os elementos do DOM existam quando tentarmos acessá-los
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector("#togglePassword"); //togglePassword: Seleciona o ícone do olho (usando seu ID #togglePassword)
    const password = document.querySelector("#password"); // password: Seleciona o campo de senha (usando seu ID #password)
    
    
    if(togglePassword && password) { // Verifica se elementos existem, previne erros
        togglePassword.addEventListener("click", function() {
            // Corrigido a lógica de alternância toda vez que clilcar no icone do olho
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type); // vai verificar se o tipo atual é password, se for, muda pra text (mostra a senha), se não for, volta para password(esconde a senha)
            
            // Alterna o ícone, vai deixar o olho aberto ou fechado
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});
