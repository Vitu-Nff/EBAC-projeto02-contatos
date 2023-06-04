document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var nome = document.getElementById('nome').value;
  var contato = document.getElementById('contato').value;

  // Check that the phone number has been correctly entered
  var numeroContato = contato.replace(/\D/g, '');
  if(numeroContato.length !== 10 && numeroContato.length !== 11) {
      document.getElementById('error').style.display = 'block';
      return;
  }

  var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
  var novaLinha = table.insertRow(table.rows.length);

  var coluna1 = novaLinha.insertCell(0);
  var coluna2 = novaLinha.insertCell(1);

  coluna1.innerHTML = nome;
  coluna2.innerHTML = contato;

  
  document.getElementById('error').style.display = 'none';
  document.getElementById('nome').value = "";
  document.getElementById('contato').value = "";
});


function formatInput(input) {
  let numeros = input.value.replace(/\D/g, '');
  let char = {};
  if(numeros.length <= 10) {
    char = {0: '(', 2: ') ', 6: '-'};
  } else {
    char = {0: '(', 2: ') ', 7: '-'};
  }
  
  input.value = '';

  for (var i = 0; i < numeros.length; i++) {
      input.value += (char[i] || '') + numeros[i];
  }
}
