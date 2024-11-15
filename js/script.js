// Função de Validação
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  if (!name || !email) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }
  return true;
}

// Exibir dados na formAction.html
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const email = params.get("email");
  const interest = params.get("interest");

  const confirmation = document.getElementById("confirmation");
  confirmation.innerHTML = `
    <p>Nome: ${name}</p>
    <p>Email: ${email}</p>
    <p>Interesse: ${interest}</p>
  `;
};

