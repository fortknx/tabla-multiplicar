
function multi() {
  numero = document.getElementById("num").value;
  document.write("<table class='table-auto' border='1'><tr><td>Número</td><td>Resultado</td></tr>");
  for (i = 0; i <= 10; i++) {
    document.write("<tr><td>" + numero + " x " + i + "</td><td>" + numero * i + "</td></tr>");
  }

}

