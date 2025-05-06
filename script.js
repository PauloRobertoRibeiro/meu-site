
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_dod41n7', 'template_ux4h87o', this)
      .then(function() {
        alert("Mensagem enviada com sucesso!");
      }, function(error) {
        alert("Erro ao enviar: " + error.text);
      });
  });
  
  
  