document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o scroll suave a todos os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll suave usando a API nativa
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // -70 para considerar o header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Exemplo de funcionalidade JavaScript: Feedback de formulário simples
    const form = document.querySelector('.form-custom');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simula o envio do formulário
            alert('Mensagem enviada com sucesso! A Livraria Página Viva agradece o seu contato.');
            form.reset(); 
        });
    }
});
