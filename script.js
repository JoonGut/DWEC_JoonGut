let paleta = document.getElementById("paleta");
let teclado = document.getElementById("teclado");
let mensaje = document.getElementById("mensaje");

// Layout del teclado
let todasTeclas = [
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM"
];

function crearinput(){
  paleta.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      let input = document.createElement("div");
      input.className = "casilla";
      input.id = `input-${i}-${j}`;
      paleta.appendChild(input);
    }
  }
}
function crearTeclado() {
  teclado.innerHTML = "";

  for (let i = 0; i < todasTeclas.length; i++) {
    let filaDiv = document.createElement("div");
    filaDiv.className = "filaTeclas";

    // Recorrer cada letra de la fila
    let fila = todasTeclas[i];
    for (let j = 0; j < fila.length; j++) {
      let tecla = document.createElement("div");
      tecla.className = "teclas";
      tecla.textContent = fila[j];
      tecla.dataset.key = fila[j];

      filaDiv.appendChild(tecla);
    }

    teclado.appendChild(filaDiv);
  }
}

crearTeclado();
crearinput();
